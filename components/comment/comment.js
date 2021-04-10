import React from 'react'
import Styles from './comment.module.scss'
import HeartComment from '../heartComment/heartComment'
import ShowLikesUserNames from '../showLikesUserNames/showLikesUserNames'
import {deleteComment} from '../../services/comments'
const Comment = (props) => {
  const [settings, setSettings] = React.useState({state:false,firstClick:false})
  const [addOneToLike,setAddOneToLike]=React.useState(props.likesNumber)
  const [likesModal,setLikesModal]=React.useState(false)

  /******************************************************************************************
  *on click on the 3 dots will show settings like delete or report 
  ******************************************************************************************/



  const addLikeInTime=(newLikesNumber)=>{
    setAddOneToLike(e=>e-0+newLikesNumber)
  }
  const openshowLikesUserNames=()=>{
    setLikesModal(e=>!e)
  }
  React.useEffect(()=>{
    console.log(settings)
  },[settings])
  const ShowSettings = () => {
    if(settings.firstClick!=true){
      console.log(settings)

      setSettings({state:true,firstClick:true})

    }
}
const closeComponenet=()=>{
    console.log(settings)
  setSettings({state:false,firstClick:false})

}
  return (
    <div className={Styles.container}  style={likesModal==true||settings.state==true?{zIndex:"999999999999999999"}:{}}>
      {likesModal&&<ShowLikesUserNames imgid={props.imgid} showLikesForComment={true} closepopUp={openshowLikesUserNames} commentid={props.commentid}></ShowLikesUserNames>}
      <div className={Styles.imageUserAndNameContainer}>
        <div className={Styles.userImage}>
          <img src={props.userProfileImageUrl||"/avatar.png"} alt={"user.userName "|| ""}/></div>
          <h3>{props.name}</h3> 
          <h3 className={Styles.date}>{props.date.slice(0,10)} {props.date.slice(11,16)}</h3>
          <div className={Styles.Settings} style={settings.state?{zIndex:"999999999999999999"}:{zIndex:"1"}} onClick={() => ShowSettings()}>&hellip;{settings.state && <SettingsPComments postid={props.postid}  token={props.token} closeComponenetfn={closeComponenet}  imgid={props.imgid} commentid={props.commentid}></SettingsPComments>}</div></div>
          <div className={Styles.comments}><p>{props.text}</p></div>
          <div className={Styles.likesAndComments}>
          <div className={Styles.likes} >
          <HeartComment imgid={props.imgid}  addLikeInTime={(e)=>addLikeInTime(e)} token={props.token} commentid={props.commentid}></HeartComment>
          <p className={Styles.likesNumber} onClick={()=>openshowLikesUserNames()}>{addOneToLike}</p>

          </div>
        {<div className={Styles.Comments} ><p></p></div>}
      </div>
    </div>
  )
}

export default Comment

const SettingsPComments=(props)=>{
  const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 

 const deleteImageFn=()=>{
  if(props.imgid!=undefined){
    console.log("raw comments tsawer")
  }else{
    deleteComment({postid:props.postid,commentid:props.commentid,},props.token).then(result=>{
      console.log(result)
    })
    console.log("raw comments postowet")

  }

  }
  const closePopUp=()=>{
      setErrorMessage({state:false,text:""})
    }
  return (
          <div className={Styles.containerSettings}>
              {errorMessage.state==true&&<PopUpMessage fnclose={()=>closePopUp()} openPopUp={errorMessage}></PopUpMessage>}
              <div className={Styles.paramsContainer}><h3>Report</h3></div>
              {props.ownerid==props.currentUserId&&<div className={Styles.paramsContainer} onClick={()=>deleteImageFn()}><h3>Delete</h3></div>}
              <div className={Styles.paramsContainer} onClick={()=>props.closeComponenetfn()}><h3>Close</h3></div>
          </div>
          )
}