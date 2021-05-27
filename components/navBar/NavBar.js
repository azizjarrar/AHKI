import React, { useState } from 'react'
import Style from './NavBar.module.scss'
import PorfileMenu from '../profileMenu/profileMenu'
import Link from 'next/link'
import UserContext from '../../context/userContext'
import SearchUser from '../../components/searchUser/searchUser'
import { useRouter } from 'next/router'
import Notification from '../../components/notification/notification'
import {getUnreadUsersChatsNumber} from '../../services/chat'
import socketContext from '../../context/socketContext'
import {GetOtherUsersData} from '../../services/user'
import {removeToken} from '../../services/user'

const NavBar = ({ token }) => {
    const [heightAndWidthOfWindow, setHeightAndWidthOfWindow] = React.useState({ width: 0, height: 0 })//responsive handler
    const [openMenuProfileState, setOpenMenuProfile] = useState(false)//on hover profile pic open menu
    const [disyplaySearch,setDisplaySearch]=React.useState({state:false,userName:""})
    const [user, setUser]= React.useContext(UserContext)
    const [numberOfChatsNotRead,setNumberOfChatsNotRead]=React.useState(0)
    const [socket,setSocket]=React.useContext(socketContext)
    const [popUpUser,setPopUpUser]=React.useState(null)
    const [popUpNotif,setpopUpNotif]=React.useState(()=>0)
    const sideNavBarBtn = React.useRef(null)
    const [showSideNavBar,setShowSideNavBar]=React.useState(false)
    const router = useRouter()

    React.useEffect(()=>{

        async  function  chatHandler(data){
            let audio = new Audio("./msgSound.mp3")
            audio.play()
            if(router.pathname!="/chat"){
                GetOtherUsersData(data.senderId,token).then(result=>{
                    setPopUpUser({...result.data.data[0]})
                }).catch(error=>{
                    alert(error)
                })
            }
        }
        async function  notifHandler(data){
            if(data.notif==1){
                setpopUpNotif(e=>e+1)
            }
        }
        if(socket!=undefined && socket!=null){
        socket.on("getMessageFromUserToUser",chatHandler)
        socket.on("getNotificationFromUserToUser",notifHandler)
          }
          return () => {
            if(socket!=undefined && socket!=null){
                socket.off('getMessageFromUserToUser', chatHandler);
                socket.off('getNotificationFromUserToUser', notifHandler);

            }
          }
      })


    React.useEffect(() => { 
        setHeightAndWidthOfWindow({ height: window.innerHeight, width: window.innerWidth }) 

        if(token!=undefined && token!=null && token!=false){
     
            getUnreadUsersChatsNumber({},token).then(data=>{
                setNumberOfChatsNotRead(data.data.data)
            }).catch(error=>{
                console.log(error)
            })
        }

    }, []);

    const [openOrCloseNotif,setOpenOrCloseNotif]=React.useState(false)
    const openMenuProfile = () => { setOpenMenuProfile(true) }
    const closeMenuProfile = () => { setOpenMenuProfile(false) }

    const openMenuProfileonClick = () => { setOpenMenuProfile(e => !e) }
    
    const OpensearchUsers=(e)=>{
        setDisplaySearch({state:true,userName:""})
        //
    }
    const SearchUserFn=(e)=>{
        setDisplaySearch({state:true,userName:e.target.value})

    }
    const closeSearchUser=(e)=>{
        setTimeout(() => {
            setDisplaySearch({state:false,userName:""})

        }, 300);
    }
    const openOrCloseNotifications=()=>{
        setOpenOrCloseNotif(e=>!e)
    }

    const ShowSideNavBar=()=>{
   
        sideNavBarBtn.current.classList.toggle(Style.change);
        setShowSideNavBar(e=>!e)
    }
    if (heightAndWidthOfWindow.width > heightAndWidthOfWindow.height) {
        return (
            <div className={Style.container}>
                <nav className={Style.nav}>
                    <Link href="/"><div className={Style.Logo}><h1>SPAKSI</h1></div></Link>
                    <div className={Style.Search}>
                        <div className={Style.flexItems}>
                            <form onBlur={()=>closeSearchUser()} onFocus={(e)=>OpensearchUsers(e)}>
                                {disyplaySearch.state&&<SearchUser token={token} searchUserName={disyplaySearch.userName}></SearchUser>}
                                <input name="search" type="text" placeholder="Search accounts" autoComplete="off"  onChange={(e)=>SearchUserFn(e)} ></input>
                                <span></span>
                                <div className={Style.searchImg}>
                                    <svg width="25" height="20" viewBox="0 0 28 38" fill="rgba(22, 24, 35, 0.75)" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z" fill="rgba(22, 24, 35, 0.75)" />
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
  
                    {token && <div className={Style.authenticated}>
                         <Chat popUpUser={popUpUser} numberOfChatsNotRead={numberOfChatsNotRead}></Chat>
                        <div className={Style.notification} onClick={()=>openOrCloseNotifications()}>
                            {openOrCloseNotif&&<Notification token={token}></Notification>}
                            {popUpNotif!=0&&<div className={Style.numberOfNotificationNotReadlocal}><span>{popUpNotif}</span></div>}
                            <svg width="25" height="25" viewBox="0 0 50 50" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z" fill="black" />
                            </svg>
                        </div>

                        <div className={Style.profile} onClick={() => openMenuProfileonClick()} onMouseLeave={() => closeMenuProfile()} onMouseEnter={() => openMenuProfile()}>{user != null && <div className={Style.navBarImageContainer}><img src={user.currentImageUrl  || "/avatar.png"} /></div>}{openMenuProfileState && <PorfileMenu></PorfileMenu>}</div>
                    </div>}
                    {!token && <div className={Style.Nonauthenticated}>
                    <Link href={"/signin"}><button ><p>Log In</p></button></Link> 
                    </div>
                    }
                </nav>
            </div>
        )
    } else
        /*mobile */

        return (
            <div className={Style.container}>
                <nav className={Style.nav}>
                {token && <div style={{flex:"1 !important"}} className={Style.authenticated}>

                        <SideNavBar user={user} token={token} showSideNavBar={showSideNavBar}   numberOfChatsNotRead={numberOfChatsNotRead}></SideNavBar>
                        <div className={Style.containerBtnSideNavBar} ref={sideNavBarBtn} onClick={()=>ShowSideNavBar()}>
                            <div className={Style.bar1}></div>
                            <div className={Style.bar2}></div>
                            <div className={Style.bar3}></div>
                        </div>
                        </div>
                }
                   
                <div className={Style.Search}>
                        <div className={Style.flexItems}>
                            <form onBlur={()=>closeSearchUser()} onFocus={(e)=>OpensearchUsers(e)}>
                                {disyplaySearch.state&&<SearchUser popUpNotif={popUpNotif} token={token} searchUserName={disyplaySearch.userName}></SearchUser>}
                                <input name="search" type="text" placeholder="Search accounts" autoComplete="off"  onChange={(e)=>SearchUserFn(e)} ></input>
                                <span></span>
                                <div className={Style.searchImg}>
                                    <svg width="20" height="20" viewBox="0 0 28 38" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z" fill="black" />
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
                    {!token && <div className={Style.Nonauthenticated}>
                    <Link href={"/signin"}><button ><p>Log In</p></button></Link> 
                    </div>
                    }
                </nav>
            </div>
        )

}
export default NavBar


const Chat=(props)=>{
    const [numberOfChatsNotReadlocal,setNumberOfChatsNotRead]=React.useState(0)
    const [userWhoSentYouImage,setUserWhoSentYouImage]=React.useState(null)
    React.useEffect(()=>{
        setNumberOfChatsNotRead(props.numberOfChatsNotRead)
    },[props.numberOfChatsNotRead])
    React.useEffect(()=>{
        if(props.popUpUser!=undefined){
            setTimeout(() => {
                setUserWhoSentYouImage(null)
            }, 2000);
            setUserWhoSentYouImage(props.popUpUser.currentImageUrl)

        }
      
    },[props])
    return(<Link href="/chat"><div className={Style.chatSvg}>
        {userWhoSentYouImage!=null  &&<div className={Style.showTemImageOfUserWhoSentYouMessage}><img src={userWhoSentYouImage}/></div>}
        {numberOfChatsNotReadlocal!=0&&<div className={Style.numberOfChatsNotReadlocal}><span>{numberOfChatsNotReadlocal}</span></div>}
            <svg width="10" height="10" viewBox="100 -0 300.011 500.011"       fill="black"    xmlns="http://www.w3.org/2000/svg"  >
                        <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/>
            </svg>
        </div>
        </Link>
    )
}
const SideNavBar=(props)=>{
    //props.user.currentImageUrl
    //props.user
    const removeCookie=(userid)=>{
        fetch("/api/logout",{method:"post",headers:{"Content-Type":"application/json"}}).then(()=>{
            removeToken(userid).then()
            location.reload();
        })
    }
    return(<div style={props.showSideNavBar?{marginLeft:"0"}:{marginLeft:"-100%"}} className={Style.sideBarContainer}>
            <ul>
                <Link href="/profile">
                    <li>
                        <div className={Style.userImageInSideNavBar}><img src={props.user.currentImageUrl}/></div><p>{props.user.userName}</p>
                    </li>
                </Link>
                <Link href="/chat">    
                    <li>
                        <div className={Style.iconSideNavBar}><Chat  numberOfChatsNotRead={props.numberOfChatsNotRead}></Chat></div> <p>Messages</p>
                    </li>
                </Link>
                <li>
                <div className={Style.iconSideNavBar}>
                            <svg width="25" height="25" viewBox="0 0 50 50" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z" fill="black" />
                            </svg>
                    </div> <p>Notification</p>
                </li>
                <li onClick={()=>removeCookie(props.user._id)}>
                <div className={Style.iconSideNavBar}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="m13.5 21h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.827 0 1.5-.673 1.5-1.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 1.378-1.121 2.5-2.5 2.5z"/>
                        </g><g>
                        <path d="m23.5 11h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                        </g><g>
                        <path d="m8 24c-.22 0-.435-.037-.638-.109l-5.99-1.997c-.82-.273-1.372-1.035-1.372-1.894v-18c0-1.103.897-2 2-2 .222 0 .438.037.639.11l5.989 1.996c.82.272 1.372 1.034 1.372 1.894v18c0 1.103-.897 2-2 2zm-6-23c-.552 0-1 .449-1 1v18c0 .428.276.808.688.946l6 2c.656.233 1.312-.292 1.312-.946v-18c0-.429-.276-.809-.688-.945l-6-2c-.103-.037-.208-.055-.312-.055z"/></g><g><path d="m15.5 8c-.276 0-.5-.224-.5-.5v-5c0-.827-.673-1.5-1.5-1.5h-11.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11.5c1.379 0 2.5 1.122 2.5 2.5v5c0 .276-.224.5-.5.5z"/>
                        </g><g>
                        <path d="m19.5 15c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l3.646-3.646-3.646-3.646c-.195-.195-.195-.512 0-.707s.512-.195.707 0l4 4c.195.195.195.512 0 .707l-4 4c-.097.096-.225.145-.353.145z"/>
                    </g>
                </svg>
                    </div>  <p>Log Out</p>
                </li>
            </ul>
    </div>)
}


