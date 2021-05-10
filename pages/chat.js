import React from 'react'
import Style from '../styles/chat.module.scss'
import NavBar from '../components/navBar/NavBar'
import { Picker,Emoji  } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import {searchUserNameApi} from '../services/user'
import {addMessage,getMessagesOfCurrentconversation,getUserWhoChatWith} from '../services/chat';
import socketContext from '../context/socketContext'
import userContext from '../context/userContext'


const chat = (props) => {
    const [closeOrOpenEmojiPickerState,setcloseOrOpenEmojiPickerState]=React.useState(false)
    const [EmojiContainerHeight, setEmojiContainerHeight] = React.useState(9)//responsive handler
    const [listOfUsers,setListOfUsers]=React.useState([])
    const [currentUserToChatWith,setCurrentUserToChatWith]=React.useState({currentImageUrl:undefined,userName:undefined,_id:undefined})
    const [message,setMessage]=React.useState("")
    const [currentChats,setCurrentChats]=React.useState([])
    const messagesComp=React.useRef(null)
    const [user,setUser]=React.useContext(userContext)
    const [socket,setSocket]=React.useContext(socketContext)
    const [skip,setSkip]=React.useState(()=>0)

 

    React.useEffect(()=>{
        if(user._id!=undefined&& user._id.length>2)
        getUserWhoChatWith({},props.token).then(result=>{
            let newUserWhoChatWith=result.data.data.map(e=>{
                if(e.firstUser._id==user._id){
                    return Promise.resolve({...e.secoundUser,notSeenMessageNumber:e.notSeenMessageNumber})
                }else{
                    return Promise.resolve({...e.firstUser,notSeenMessageNumber:e.notSeenMessageNumber})
                }
           
               
            })
            Promise.all(newUserWhoChatWith).then(newarray=>{
              setListOfUsers([...newarray])
            })
         
          }).catch(e=>console.log(e.message))
    },[user])
    React.useEffect(()=>{
        if(currentUserToChatWith._id!=undefined){
            getMessagesOfCurrentconversation({secondUser:currentUserToChatWith._id,skip:0},props.token).then(data=>{
                setCurrentChats([...data.data.data.reverse()])
                messagesComp.current.scrollTop=messagesComp.current.scrollHeight+ messagesComp.current.clientHeight;


            }).catch(error=>{
                console.log(error)
            })
        }
  
    
    
    },[currentUserToChatWith])
    const addEmoji=(e)=>{
        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)
        setMessage(el=>{return el+emoji})
      };
    const closeOrOpenEmojiPicker=()=>{
        setcloseOrOpenEmojiPickerState(e=>!e)
      }
      const searchForUser=(e)=>{
            searchUserNameApi(e.target.value,props.token).then((result=>{
                if(result.data.data!=undefined){
                    setListOfUsers(e=>{
                        return [...result.data.data]
                    }) 
                }
            }))
        
      }
      const getUserdataFn=(currentUserData)=>{
        setCurrentUserToChatWith(currentUserData)
      }
      const sendMessage=()=>{
        if(message.length>0&&currentUserToChatWith._id!=undefined){
        addMessage({receiver:currentUserToChatWith._id,message:message,FirstTime:currentChats.length},props.token).then(data=>{
            setCurrentChats(e=>{
                let r = Math.random().toString(36).substring(7);
                return [...e,{users:[user._id],message:message,_id:r}]

            })
            
            messagesComp.current.scrollTop=messagesComp.current.scrollHeight+ messagesComp.current.clientHeight;

                socket.emit("sendMessageFromUserToUser",{otherUserId:currentUserToChatWith._id,text:message,senderId:user._id})

          

            setMessage("")
        }).catch(error=>{
            console.log(error)
        })
    }
      }
      const messageHandler=(e)=>{
        setMessage(e.target.value)
      }
      React.useEffect(()=>{
        async  function  chatHandler(data){

            let audio = new Audio("./msgSound.mp3")
            audio.play()
            let ListOfUser = await listOfUsers.map((e)=>{
                if(data.senderId==e._id && currentUserToChatWith._id!=e._id){
                    e.notSeenMessageNumber=e.notSeenMessageNumber+1
                    return Promise.resolve(e)
                }else{
                    return Promise.resolve(e)
                }
            })
            Promise.all(ListOfUser).then(data=>{
                
                setListOfUsers(data)
            })
            if(data.senderId==currentUserToChatWith._id){
                setMessage("")

                setCurrentChats(e=>{
                    let r = Math.random().toString(36).substring(7);
                    return [...e,{users:[data.senderId],message:data.text,_id:r}]
                })
                messagesComp.current.scrollTop=messagesComp.current.scrollHeight+ messagesComp.current.clientHeight;

            }else{

            }
        }
        if(socket!=undefined && socket!=null){
        socket.on("getMessageFromUserToUser",chatHandler)
          }
          return () => {
            if(socket!=undefined && socket!=null){
                socket.off('getMessageFromUserToUser', chatHandler);

            }
          }
      })
      const scrollfn=(e)=>{
          //if( e.target.scrollTop === (e.target.scrollHeight - e.target.offsetHeight)){
          if( e.target.scrollTop === 0){
            setSkip(e=>e+20)
          }
          
      }
      React.useEffect(()=>{
          
        getMessagesOfCurrentconversation({secondUser:currentUserToChatWith._id,skip:skip},props.token).then(data=>{
            setCurrentChats(e=>[...data.data.data.reverse(),...e])
           
        }).catch(error=>{
            console.log(error)
        })
      },[skip])
    return (
        <div className={Style.container} >
                  <NavBar token={props.token}></NavBar>
                <div className={Style.chatAndRandomOnlineUserContaner}>
                    <div className={Style.UserContaner}>
                        <div className={Style.header}>
                            <h1>contacts</h1>
                        </div>
                        <div className={Style.listContacs}>
                        {listOfUsers.map(e=><Users getUserdata={getUserdataFn} key={e._id} userData={e}></Users>)}

                        </div>
                        <div className={Style.bottom}>
                        <div className={Style.searchContainer}><div className={Style.inputcss}><input onChange={(e)=>searchForUser(e)} type="text" required></input><label><span>Search users</span></label></div></div>
                        </div>
                    </div>
                    <div className={Style.chat}>
                    <div className={Style.header}>
                        <h1>Messages</h1>
                    </div>
                    <div className={Style.chatContainer}>
                        <div className={Style.headerOfChatuserNameAndName}>
                            <div className={Style.userImageContainer}><img src={currentUserToChatWith.currentImageUrl || "/avatar.png"} /></div>
                            <div className={Style.userName}><h3>{currentUserToChatWith.userName}</h3></div>
                        </div>
                        <div onScroll={(e)=>scrollfn(e)} ref={messagesComp} className={Style.messages}>
                            {currentChats.map(e=>{
                                return(<div key={e._id} className={Style.oneMessage}>
                                    {e.users[0]==currentUserToChatWith._id?
                                    <div className={Style.messageText} text-data={e.date!=undefined?e.date.slice(0,10)+" "+e.date.slice(11,16):false}  style={{"--i":"0%",float:"left",backgroundColor:"#e4e6eb",color:"black"}}><p>{e.message}</p></div>:
                                    <div className={Style.messageText} text-data={e.date!=undefined?e.date.slice(0,10)+" "+e.date.slice(11,16):false}  style={{"--i":"-100%",float:"right",backgroundColor:"#1876f3",color:"white"}}><p>{e.message}</p></div>
                                    }
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className={Style.sendMessage}>
                        <form onSubmit={e=>e.preventDefault()} >
                        <div className={Style.inputContainer}><div className={Style.inputcss}><input value={message} onChange={(e)=>messageHandler(e)} type="text" required></input><label><span>Message</span></label></div></div>
                        <div className={Style.btns}>
                        <div className={Style.openOrCloseEmojiPicker} onClick={()=>closeOrOpenEmojiPicker()}>
                        <div className={Style.emojiLogo}><Emoji emoji={{ id: 'smiling_face_with_3_hearts', skin: 3 }} size={16} /></div>
                        {closeOrOpenEmojiPickerState&&<div className={Style.emojiPickerContainer}><Picker perLine={EmojiContainerHeight} onSelect={(e)=>addEmoji(e)} /></div>}
                        </div>
                            <button type="submit" className={Style.btnsend} onClick={()=>sendMessage()}><span className={Style.sendMessageBtn} ><SentSvg></SentSvg></span></button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default chat
export async function getServerSideProps({ req, res }) {
    return req.cookies.token ? { props: { token: req.cookies.token } } : { props: { token: false } }
  }

  const SentSvg=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_95" data-name="Layer 95"><path d="M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94Z"/><path d="M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"/><path d="M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"/><path d="M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"/></g></svg>
        )
  }
  const Users=(props)=>{
      const [notSeenMessageNumberlocal,setNotSeenMessageNumberlocal]=React.useState(props.userData.notSeenMessageNumber)
      React.useEffect(()=>{
        setNotSeenMessageNumberlocal(props.userData.notSeenMessageNumber)
      },[props.userData.notSeenMessageNumber])
    return(
        <div><div className={Style.userContainer} onClick={()=>{props.getUserdata(props.userData),setNotSeenMessageNumberlocal(0)}}>
                {notSeenMessageNumberlocal!=0&&<div className={Style.notSeenMessageNumbe}><span>{notSeenMessageNumberlocal}</span></div>}
                <div  className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div>
                <div  className={Style.userName}><p>{props.userData.userName}</p></div>
        </div>
        </div>
    )
}