import React from 'react'
import Styles from './postUsersStorys.module.scss'
import LanguageContext from '../../context/languageContext'
import userContext from '../../context/userContext'
import 'emoji-mart/css/emoji-mart.css'
import { Picker,Emoji  } from 'emoji-mart'
import {postnrmltopic} from '../../services/post'
import SwitchCom from '../switch/switchCom'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import Image from 'next/image'

const PostTodayTopic = (props) => {
  const [imageOrVideo, setImageOrVideo] = React.useState(false)
  const [imageOrVideoDataToSend, setImageOrVideoDataToSend] = React.useState(false)
  const [mask, setMask] = React.useState(false)
  const [language , setLanguage]=React.useContext(LanguageContext)
  const [user,setUser]=React.useContext(userContext)
  const [closeOrOpenEmojiPickerState,setcloseOrOpenEmojiPickerState]=React.useState(false)
  const [textAreaData,setTextAreaData]=React.useState("")
  const [countLettres,setCountLettres]=React.useState(0)
  const [EmojiContainerHeight, setEmojiContainerHeight] = React.useState(9)//responsive handler
  const [enableCommentAnnonymState,setEnableCommentAnnonymState]=React.useState(false)
  const router = useRouter()

  const PublishPost=()=>{
    var formData = new FormData()
    formData.append("postText",textAreaData)
    if(imageOrVideo!=false){formData.append("postImage",imageOrVideoDataToSend)}
    formData.append("anonyme",mask)
    formData.append("allowAnonymeComments",enableCommentAnnonymState)

    postnrmltopic(formData,user.token).then(result=>{
      setTextAreaData("")
      setImageOrVideo(false)
        if(router.pathname!="/"){props.refrechData()}
    }).catch(error=>{
      alert(error)
    })
  }
  React.useEffect(() => { 
    if(window.innerWidth>500){
      setEmojiContainerHeight(9) 
    }else{
      setEmojiContainerHeight(8) 
    }
  },[]);
  /****************************************/
  /**********save image in var ************/
  /****************************************/
  const changeFile = (e) => {
    if(e.target.files[0]!=undefined){
      setImageOrVideoDataToSend(e.target.files[0])
        if(e.target.files[0].type=="video/mp4"){
        setImageOrVideo({type:"video",data:URL.createObjectURL(e.target.files[0])})
      }else{
        setImageOrVideo({type:"image",data:URL.createObjectURL(e.target.files[0])})
      }
    }

  }
  /****************************************/
  /************remove image****************/
  /****************************************/
  const removeImage = () => {
    setImageOrVideoDataToSend(false)
    setImageOrVideo(false)
  }
  /******************************************************/
  /********when mask on user post annonymosly************/
  /******************************************************/

  /*************************************************************/
  /****************if mask on it will turn into blue************/
  /*************************************************************/


  const closeOrOpenEmojiPicker=()=>{
    setcloseOrOpenEmojiPickerState(e=>!e)
  }
  const textAreaHolder=(e)=>{
    e.target.style.height = "16px";
    e.target.style.height = (e.target.scrollHeight)+"px";
    setTextAreaData(el=>{
      if(el.length<=1000){
        return e.target.value
      }else{
       return el.slice(0,1000)
      }
    })
    
  }
  const addEmoji=(e)=>{
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach(el => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setTextAreaData(el=>{
      if(el.length<=1000){
        return el+emoji
      }else{
        return el.slice(0,1000)
      }
    })
  };
  React.useEffect(()=>{
    setCountLettres(textAreaData.length)
  },[textAreaData])
const changestateOfCommentAnnonym=(state)=>{
  setEnableCommentAnnonymState(state)
}
  return (
    
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1>
            <span>Annonym Comments &#10152; </span>
             you can lette you follower describe theme self free by  letting them comment annonymly
        </h1>  
        <SwitchCom changestateOfCommentAnnonym={(e)=>changestateOfCommentAnnonym(e)} state={enableCommentAnnonymState}></SwitchCom>   
       </div>
      <div className={Styles.userTopicContainer}>
      <div className={Styles.userImage}><img src={user.currentImageUrl || "/avatar.png"} /></div>
        <div className={Styles.postTopic}>
          <div className={Styles.textAreaContainer}>
          <textarea placeholder={"say somthing"}  onChange={(e)=>textAreaHolder(e)} value={textAreaData} className={Styles.textArea}/>
          <div className={Styles.countLettres}>
            <span className={Styles.countLettresCss} style={countLettres>=1000?{color:"red"}:{}}>{countLettres} : 1000</span>
            <span className={Styles.postText} onClick={()=>PublishPost()}><SentSvg></SentSvg></span></div>
          </div>
            <div className={Styles.maskEmojiAndUploadImageContainer}>

              <div className={Styles.openOrCloseEmojiPicker} onClick={()=>closeOrOpenEmojiPicker()}>
                <div className={Styles.emojiLogo}><Emoji emoji={{ id: 'smiling_face_with_3_hearts', skin: 3 }} size={16} /></div>
                {closeOrOpenEmojiPickerState&&<div className={Styles.emojiPickerContainer}><Picker perLine={EmojiContainerHeight}  onSelect={(e)=>addEmoji(e)} /></div>}
              </div>
              <div className={Styles.uploadImage} hovertextinputfile={language.Uploadphotowithyourpost}><input onChange={e => changeFile(e)} type="file" /><Image src="/svgicons/camera.svg" height={30} width={30} /></div>

            </div>
        </div>
      </div>
      {imageOrVideo != false &&  <div style={imageOrVideo.type!="image"?{width:"100%"}:{}} className={Styles.image_video_Container}>
        <div className={Styles.closeBtn} onClick={() => removeImage()}></div>
        {imageOrVideo.type=="image"?<img src={imageOrVideo.data} />:<ReactPlayer width="100%" height="100%" controls={true} url={imageOrVideo.data} />}
        
        </div>}
    </div>
  )
}

export default PostTodayTopic


const SentSvg=()=>{
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_95" data-name="Layer 95"><path d="M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94Z"/><path d="M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"/><path d="M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"/><path d="M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"/></g></svg>
      )
}