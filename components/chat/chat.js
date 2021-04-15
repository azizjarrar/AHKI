import React from 'react'
import Style from './chat.module.scss'
import userContext from '../../context/userContext'

const chat = (props) => {

    return (
        <div className={Style.container}>
            <div className={Style.leftNavBar}>
                <div className={Style.currentUserImage}>
                    <div className={Style.imgContainer}>
                        <img src={props.imguserUrl}/>
                    </div>
                </div>
            </div>
            <div className={Style.chatContainer}>
                <div className={Style.headerOfOpnedChat}></div>
            </div>
        </div>
    )
}

export default chat

const users=()=>{
    return (<div>   

    </div>)
}