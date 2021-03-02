import React from 'react'
import Styles from './comment.module.scss'
import CommentOrPostSettings from '../commentOrPostSettings/commentOrPostSettings'

const Comment = (props) => {
    const [settings,setSettings]=React.useState(false)
  /******************************************************************************************
  *on click on the 3 dots will show settings like delete or report 
  ******************************************************************************************/
    const ShowSettings=()=>{
        setSettings(e=>!e)
      }
    return (
        <div className={Styles.container}>
            <div className={Styles.imageUserAndNameContainer}><div className={Styles.userImage}></div><h3>Aziz Jarra</h3> <div className={Styles.Settings} onClick={()=>ShowSettings()}>{settings&&<CommentOrPostSettings></CommentOrPostSettings>}</div></div>
            <div className={Styles.comments}><p>{props.text}</p></div>
            <div className={Styles.likesAndComments}>
             <div className={Styles.likes} likesnumber="156"><svg width="69" height="62" viewBox="0 0 69 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.7765 4.47191C53.9871 -2.25216 41.9525 -1.24217 34.5 6.54723C27.0475 -1.24217 15.0129 -2.26599 7.22345 4.47191C-2.91092 13.2298 -1.4285 27.508 5.79493 35.0761L29.4328 59.8002C30.7805 61.2114 32.5863 62 34.5 62C36.4271 62 38.2195 61.2252 39.5672 59.814L63.2051 35.0899C70.415 27.5219 71.9244 13.2436 61.7765 4.47191ZM58.5961 30.4135L34.9582 55.1376C34.6348 55.4696 34.3652 55.4696 34.0418 55.1376L10.4039 30.4135C5.48497 25.2667 4.48771 15.5265 11.3877 9.56338C16.6301 5.03916 24.716 5.7171 29.7832 11.0161L34.5 15.9554L39.2168 11.0161C44.3109 5.68943 52.3969 5.03916 57.6123 9.54954C64.4988 15.5127 63.4746 25.3082 58.5961 30.4135Z" fill="#1876f3"/></svg></div>
             <div className={Styles.Comments} ><p>Replay</p></div>
             </div>
        </div>
    )
}

export default Comment
