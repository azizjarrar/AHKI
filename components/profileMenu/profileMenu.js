import React from 'react'
import Styles from './profileMenu.module.scss'
import Link from 'next/link'
import {removeToken} from '../../services/user'
import UserContext from '../../context/userContext'

const removeCookie=(userid)=>{
    fetch("/api/logout",{method:"post",headers:{"Content-Type":"application/json"}}).then(()=>{
        removeToken(userid).then()
        location.reload();
    })
}
const profileMenu = (props) => {
    const [user,setUser]= React.useContext(UserContext)

    return (
        <div className={Styles.container}>
            <div className={Styles.hoverHandler}>
            <div className={Styles.linksContainers}><Link  href="/profile"><h2>Profile</h2></Link></div>
            <div className={Styles.linksContainers} onClick={()=>removeCookie(user._id)}><Link  href="/profile"><h2>Log out</h2></Link></div>
            </div>
        </div>
    )
}

export default profileMenu
