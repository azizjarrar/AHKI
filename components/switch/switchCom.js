import React from 'react'
import Style from './switch.module.scss'
const switchCom = (props) => {
    const switchState=()=>{
        
            props.changestateOfCommentAnnonym(!props.state)
      
    }
    return (
        <div className={Style.container}>
            <div className={Style.header}><h2 ><span style={{color:"#1876f3"}}>{props.text}</span> {props.state?"turn off":"turn on"}</h2></div>
            <div  style={props.state?{backgroundColor:"#1876f3"}:{backgroundColor:"#EBEEF2"}} className={Style.switchContainer} onClick={()=>switchState()}>
                <div className={Style.dot} style={props.state?{backgroundColor:"white",left:27}:{backgroundColor:"#1876f3",left:3}}></div>
            </div>
        </div>
    )
}

export default switchCom
