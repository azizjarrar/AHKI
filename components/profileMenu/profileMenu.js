import React from 'react'
import Styles from './profileMenu.module.scss'
import Link from 'next/link'
import cookie from 'js-cookie'
const removeCookie=()=>{
    fetch("api/logout",{method:"post",headers:{"Content-Type":"application/json"}}).then(()=>{
        location.reload();

    })

}
const profileMenu = (props) => {
    console.log(props.closeProfileMenuProps)
    return (
        <div className={Styles.container}>
            <div className={Styles.hoverHandler}>
            <div className={Styles.linksContainers}><Link  href="/profile"><h2>Profile</h2></Link></div>
            <div className={Styles.linksContainers} onClick={()=>removeCookie()}><Link  href="/profile"><h2>Log out</h2></Link></div>
            </div>
        </div>
    )
}

export default profileMenu
