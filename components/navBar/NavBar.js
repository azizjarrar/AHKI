import React, { useState } from 'react'
import Style from './NavBar.module.scss'
import ModalSingInSingUp from '../modalSingInSingUp/ModalSingInSingUp'
import PorfileMenu from '../profileMenu/profileMenu'
import Link from 'next/link'
import UserContext from '../../context/userContext'
import SearchUser from '../../components/searchUser/searchUser'
import { useRouter } from 'next/router'
import Notification from '../../components/notification/notification'
const NavBar = ({ token }) => {
    const [modalSingInSingUp, setModalSingInSingUp] = useState(false)//open modal
    const [heightAndWidthOfWindow, setHeightAndWidthOfWindow] = React.useState({ width: '', height: '' })//responsive handler
    const [openMenuProfileState, setOpenMenuProfile] = useState(false)//on hover profile pic open menu
    const [disyplaySearch,setDisplaySearch]=React.useState({state:false,userName:""})
    const [user, setUser]= React.useContext(UserContext)
    React.useEffect(() => { setHeightAndWidthOfWindow({ height: window.innerHeight, width: window.innerWidth }) }, []);
    const [openOrCloseNotif,setOpenOrCloseNotif]=React.useState(false)
    const openMenuProfile = () => { setOpenMenuProfile(true) }
    const closeMenuProfile = () => { setOpenMenuProfile(false) }
    const router = useRouter()

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
                                    <svg width="20" height="20" viewBox="0 0 28 38" fill="#1876f3" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z" fill="#b0b0b5" />
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
                    {token && <div className={Style.authenticated}>
                        <div className={Style.notification} onClick={()=>openOrCloseNotifications()}>
                            {openOrCloseNotif&&<Notification token={token}></Notification>}
                            <svg width="35" height="35" viewBox="0 0 50 50" fill="#1876f3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z" fill="#1876f3" />
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
                    <div className={Style.Search}>
                        <div className={Style.flexItems}>
                            <form onBlur={()=>closeSearchUser()} onFocus={(e)=>OpensearchUsers(e)}>
                                {disyplaySearch.state&&<SearchUser token={token} searchUserName={disyplaySearch.userName}></SearchUser>}
                                <input name="search" type="text" autoComplete="off" placeholder="Search accounts"  onChange={(e)=>SearchUserFn(e)}></input>
                                <span></span>
                                <div className={Style.searchImg}>
                                    <svg width="20" height="20" viewBox="0 0 28 38" fill="#1876f3" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z" fill="#1876f3" />
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
                    {token && <div className={Style.authenticated}>
                        <div className={Style.notification} onClick={()=>openOrCloseNotifications()}>
                        {openOrCloseNotif&&<Notification token={token}></Notification>}

                            <svg width="35" height="35" viewBox="0 0 50 50" fill="#1876f3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z" fill="#1876f3" />
                            </svg>
                        </div>
                    <div className={Style.profile} onClick={() => openMenuProfileonClick()} onMouseLeave={() => closeMenuProfile()} onMouseEnter={() => openMenuProfile()}>{openMenuProfileState && <PorfileMenu></PorfileMenu>} {user != null && <div className={Style.navBarImageContainer}><img src={user.currentImageUrl || "/avatar.png"} /></div>}</div>
                    </div>}
                    {!token && <div className={Style.Nonauthenticated}>
                        <Link href={"/signin"}><button ><p>Log In</p></button></Link> 


                    </div>}
                </nav>
            </div>
        )

}
export default NavBar


