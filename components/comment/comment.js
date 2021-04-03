import React from 'react'
import Styles from './comment.module.scss'
import CommentOrPostSettings from '../commentOrPostSettings/commentOrPostSettings'
import HeartComment from '../heartComment/heartComment'
import ShowLikesUserNames from '../showLikesUserNames/showLikesUserNames'

const Comment = (props) => {
  const [settings, setSettings] = React.useState(false)
  const [addOneToLike,setAddOneToLike]=React.useState(props.likesNumber)
  const [likesModal,setLikesModal]=React.useState(false)


  /******************************************************************************************
  *on click on the 3 dots will show settings like delete or report 
  ******************************************************************************************/
  const ShowSettings = () => {
    setSettings(e => !e)
  }
  const addLikeInTime=(newLikesNumber)=>{
    setAddOneToLike(e=>e-0+newLikesNumber)
  }
  const openshowLikesUserNames=()=>{
    setLikesModal(e=>!e)
  }
  return (
    <div className={Styles.container}>
      {likesModal&&<ShowLikesUserNames showLikesForComment={true} closepopUp={openshowLikesUserNames} commentid={props.commentid}></ShowLikesUserNames>}
      <div className={Styles.imageUserAndNameContainer}>
        <div className={Styles.userImage}>
          <img src={props.userProfileImageUrl||"/avatar.png"} alt={"user.userName "|| ""}/></div>
          <h3>{props.name}</h3> 
          <h3 className={Styles.date}>{props.date.slice(0,10)} {props.date.slice(11,16)}</h3>
          <div className={Styles.Settings} onClick={() => ShowSettings()}>{settings && <CommentOrPostSettings></CommentOrPostSettings>}</div></div>
          <div className={Styles.comments}><p>{props.text}</p></div>
          <div className={Styles.likesAndComments}>
          <div className={Styles.likes} >
          <HeartComment  addLikeInTime={(e)=>addLikeInTime(e)} token={props.token} commentid={props.commentid}></HeartComment>
          <p className={Styles.likesNumber} onClick={()=>openshowLikesUserNames()}>{addOneToLike}</p>

          </div>
        <div className={Styles.Comments} ><p>Replay</p></div>
      </div>
    </div>
  )
}

export default Comment
