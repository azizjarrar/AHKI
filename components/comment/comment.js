import React from 'react'
import Styles from './comment.module.scss'
import CommentOrPostSettings from '../commentOrPostSettings/commentOrPostSettings'
import HeartComment from '../heartComment/heartComment'
const Comment = (props) => {
  const [settings, setSettings] = React.useState(false)
  /******************************************************************************************
  *on click on the 3 dots will show settings like delete or report 
  ******************************************************************************************/
  const ShowSettings = () => {
    setSettings(e => !e)
  }
  return (
    <div className={Styles.container}>
      
      <div className={Styles.imageUserAndNameContainer}>
        <div className={Styles.userImage}>
          <img src={props.userProfileImageUrl||"/avatar.png"} alt={"user.userName "|| ""}/></div>
          <h3>{props.name}</h3> 
          <h3 className={Styles.date}>{props.date.slice(0,10)} {props.date.slice(11,16)}</h3>
          <div className={Styles.Settings} onClick={() => ShowSettings()}>{settings && <CommentOrPostSettings></CommentOrPostSettings>}</div></div>
      <div className={Styles.comments}><p>{props.text}</p></div>
      <div className={Styles.likesAndComments}>
        <div className={Styles.likes} likesnumber="156"><HeartComment></HeartComment></div>
        <div className={Styles.Comments} ><p>Replay</p></div>
      </div>
    </div>
  )
}

export default Comment
