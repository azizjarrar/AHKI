import React from 'react'
import Style from '../styles/chat.module.scss'
import NavBar from '../components/navBar/NavBar'
import { Picker,Emoji  } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import {searchUserNameApi} from '../services/user'
import {updateColorChat,addMessage,getMessagesOfCurrentconversation,getUserWhoChatWith} from '../services/chat';
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
    const [isWritingState,setIsWritingState]=React.useState(false)
    const [chatColor,setChatColor]=React.useState({colorone:"#1876f3",colortwo:"#e4e6eb"})
    
    React.useEffect(()=>{
        if(user._id!=undefined&& user._id.length>2)
        getUserWhoChatWith({},props.token).then(result=>{
            let newUserWhoChatWith=result.data.data.map(e=>{
                if(e.firstUser._id==user._id){
                    return Promise.resolve({...e.secoundUser,color:e.color,notSeenMessageNumber:e.notSeenMessageNumber})
                }else{
                    return Promise.resolve({...e.firstUser,color:e.color,notSeenMessageNumber:e.notSeenMessageNumber})
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
            socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})

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
          if(currentUserToChatWith._id!=undefined){
            if(e.target.value.length>0){
                socket.emit("isWriting",{isWriting:true,otherUserId:currentUserToChatWith._id,senderid:user._id})
              }else{
                socket.emit("isWriting",{isWriting:false,otherUserId:currentUserToChatWith._id,senderid:user._id})
              }
          }
 
        setMessage(e.target.value)
      }
      React.useEffect(()=>{
        async  function  chatHandler(data){

            let audio = new Audio("./msgSound.mp3")
            audio.play()
            setIsWritingState(false)
            socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})

            /*if(vu==true){
                
                socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})
            }*/
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
                

                setCurrentChats(e=>{
                    let r = Math.random().toString(36).substring(7);
                    return [...e,{users:[data.senderId],message:data.text,_id:r}]
                })
                messagesComp.current.scrollTop=messagesComp.current.scrollHeight+ messagesComp.current.clientHeight;

            }else{

            }
        }
        function isWriting(data){
            if(data.userWhoReciveWriting==user._id && data.senderid==currentUserToChatWith._id){
                setIsWritingState(data.isWriting)

            }
        }
        const setvu=(data)=>{
   
            if(document.getElementsByClassName(Style.yourMessageVu).length!=0){
                for (let i = currentChats.length-1; i>0; i--) {
                    if(document.getElementsByClassName(Style.yourMessageVu)[i]!=undefined){
                        if(document.getElementsByClassName(Style.yourMessageVu)[i].childNodes[1].style.color!="rgb(24, 118, 243)"){
                            document.getElementsByClassName(Style.yourMessageVu)[i].childNodes[1].style.color="rgb(24, 118, 243)"
                        }
                    }
                }
            }

        }
        if(socket!=undefined && socket!=null){
        socket.on("isWritingState",isWriting)
        socket.on("getMessageFromUserToUser",chatHandler)
        socket.on("setvu",setvu)
          }
          return () => {
            if(socket!=undefined && socket!=null){
                socket.off('getMessageFromUserToUser', chatHandler);
                socket.off("isWritingState",isWriting)
                socket.off("setvu",setvu)

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
      const getNewColor=(color)=>{
        setChatColor(e=>{return {...e,colorone:color}})
      }
      const setColorOfChatFn=(colorOfChatFromDataBase)=>{
        setChatColor(e=>{
            return{...e,colorone:colorOfChatFromDataBase}
        })
      }
    return (
        <div className={Style.container} >
                  <NavBar token={props.token}></NavBar>
                <div className={Style.chatAndRandomOnlineUserContaner}>
                    <div className={Style.UserContaner}>
                        <div className={Style.header}>
                            <h1>contacts</h1>
                        </div>
                        <div className={Style.listContacs}>
                        {listOfUsers.map(e=><Users setColorOfChat={setColorOfChatFn} getUserdata={getUserdataFn} key={e._id}  userData={e}></Users>)}

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
                            {isWritingState&&<div className={Style.isWritingContainer}>
                            <div className={Style.ldsellipsis}><div></div><div></div><div></div><div></div></div>
                                </div>}
                            <div className={Style.changeColorContainer}><ColorPicker receiver={currentUserToChatWith._id} token={props.token} getNewColorfn={getNewColor} chatColor={chatColor}></ColorPicker></div>
                        </div>
                        <div onScroll={(e)=>scrollfn(e)} ref={messagesComp} className={Style.messages}>
                            {currentChats.map(e=>{
                                return(<div key={e._id} className={Style.oneMessage}>
                                    {e.users[0]==currentUserToChatWith._id?
                                    <div className={Style.messageText} text-data={e.date!=undefined?e.date.slice(0,10)+" "+e.date.slice(11,16):"false"}  style={{"--i":"0%",float:"left",backgroundColor:"#e4e6eb",color:"black"}}><p>{e.message}</p></div>:
                                    <div className={`${Style.messageText} ${Style.yourMessageVu} `}   text-data={e.date!=undefined?e.date.slice(0,10)+" "+e.date.slice(11,16):"false"}  style={{"--i":"-100%",float:"right",backgroundColor:chatColor.colorone,color:"white"}}><p>{e.message}</p><span  style={e.seen==true?{color:"#1876f3"}:{color:"black"}} className={Style.seen} >&#10004;</span></div>
                                    }
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className={Style.sendMessage}>
                        <form onSubmit={e=>e.preventDefault()} >
                        <div className={Style.inputContainer}><div className={Style.inputcss}><input  value={message} onChange={(e)=>messageHandler(e)} type="text" required></input><label><span>Message</span></label></div></div>
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
        <div><div className={Style.userContainer} onClick={()=>{props.getUserdata(props.userData),setNotSeenMessageNumberlocal(0),props.setColorOfChat(props.userData.color)}}>
                {notSeenMessageNumberlocal!=0&&<div className={Style.notSeenMessageNumbe}><span>{notSeenMessageNumberlocal}</span></div>}
                <div  className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div>
                <div  className={Style.userName}><p>{props.userData.userName}</p></div>
        </div>
        </div>
    )
}


const ColorPicker=(props)=>{
    const [openColorPicker,setOpenColorPicker]=React.useState(false)
    const changePrimaryColor=(color)=>{
        props.getNewColorfn(color)
        updateColorChat({newColor:color,receiver:props.receiver},props.token)
    }
    return(<div onClick={()=>setOpenColorPicker(e=>!e)} className={Style.chatColor} style={{backgroundColor:props.chatColor.colorone}}>
        {openColorPicker&&<div className={Style.colorPicker}>
                <div className={Style.color} onClick={()=>changePrimaryColor("#ff1744")} style={{backgroundColor:"#ff1744"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#f50057")} style={{backgroundColor:"#f50057"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#3d5afe")} style={{backgroundColor:"#3d5afe"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#76ff03")} style={{backgroundColor:"#76ff03"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#c6ff00")} style={{backgroundColor:"#c6ff00"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#ff3d00")} style={{backgroundColor:"#ff3d00"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#651fff")} style={{backgroundColor:"#651fff"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#ffea00")} style={{backgroundColor:"#ffea00"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#f50057")} style={{backgroundColor:"#f50057"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#ff1744")} style={{backgroundColor:"#ff1744"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#1de9b6")} style={{backgroundColor:"#1de9b6"}}></div>
                <div className={Style.color} onClick={()=>changePrimaryColor("#03a9f4")} style={{backgroundColor:"#03a9f4"}}></div>
                

            </div>}
        </div>
    )
}