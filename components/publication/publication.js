import React from 'react'
import Styles from './publication.module.scss'
import Comment from '../comment/comment'
import LanguageContext from '../../context/languageContext'
import userContext from '../../context/userContext'
import { Picker,Emoji  } from 'emoji-mart'
import Heart from '../heart/heart'
import {addComment,getComments,countComments} from '../../services/postComments'
import {deletePost} from '../../services/post'
import {countPostLikes} from '../../services/post_likes'

import ShowLikesUserNames from '../showLikesUserNames/showLikesUserNames'

const publication = (props) => {
  const [slice, setSlice] = React.useState(100)
  const [comments, setComments] = React.useState(false)
  const [settings, setSettings] = React.useState(false)
  const [mask, setMask] = React.useState(false)
  const [language , setLanguage]=React.useContext(LanguageContext)
  const [user,setUser]=React.useContext(userContext)
  const [textAreaData,setTextAreaData]=React.useState("")
  const [countLettres,setCountLettres]=React.useState(0)
  const [closeOrOpenEmojiPickerState,setcloseOrOpenEmojiPickerState]=React.useState(false)
  const [EmojiContainerHeight, setEmojiContainerHeight] = React.useState(9)//responsive handler
  const [commentsData,setCommentsData]=React.useState([])
  const [skip,setSkip]=React.useState(0)
  const [addsOneToCommentCount,setaddOneToCommentCount]=React.useState(0)
  const [likesModal,setLikesModal]=React.useState(false)
  const maskRef=React.useRef(null)
  const [moreComments,setMoreComments]=React.useState(false) //show more comment fetch  with 3 by 3
  const [coummentNumber,setCoummentNumber]=React.useState(0)
  const [likesNumber,setLikesNumber]=React.useState(0)

  React.useEffect(() => { 
    if(window.innerWidth>500){
      setEmojiContainerHeight(9) 
    }else{
      setEmojiContainerHeight(8) 
    }
    countPostLikes({postid:props.id},user.token).then(result=>{
      setLikesNumber(result.data.count)
    })
    countComments({postid:props.id},user.token).then(result=>{
      setCoummentNumber(result.data.count)
  }).catch(error=>{
      alert(error)

  })
  },[]);
    /*************************************************************/
  /****************if mask on it will turn into blue************/
  /*************************************************************/
  React.useEffect(() => {
    if (mask) {
      maskRef.current.childNodes[0].childNodes[0].style.fill = "#1876f3"
    } else {
      maskRef.current.childNodes[0].childNodes[0].style.fill = "black"
    }
  }, [mask])

  React.useEffect(()=>{
    setCountLettres(textAreaData.length)
  },[textAreaData])
  React.useEffect(()=>{
    getComments({postid:props.id,skip:skip},user.token).then(result=>{
      setComments(true)
      if(result.data.data.length>0){
          setMoreComments(true)
      }else{
          setMoreComments(false)
      }
      setCommentsData(e=>[...e,...result.data.data])

    }).catch(error=>{
        alert(error)
    })
  },[skip])
  /************************************************/
  /*when load publicationn that had more then 100 car
  /*slice anything after 100 the show it later 
  /*when user clikc in the 3 dots
  /************************************************/
  const completeText = (e) => {
    setSlice(e)
  }
  /************************************************/
  /*******this will load list of comments************/
  /************************************************/
  const openComments = () => {
    
    setComments(e => !e)
  }


  /***************************************************************/
  /*************when click in the 3dots it will display************/
  /**************list of setings like reports and report*************/
  /***************************************************************/
  const ShowSettings = () => {
    setSettings(e => !e)
  }
    /******************************************************/
  /********when mask on user post annonymosly************/
  /******************************************************/
  const maskOn = () => {
    setMask(e => !e)
  }


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

  const AddComment=()=>{

    addComment({postid:props.id,anonyme:mask,commentText:textAreaData},user.token).then((result)=>{
        setCommentsData(e=>[{...result.data.data,commentOwner:{userName:user.userName,currentImageUrl:user.currentImageUrl,_id:user._id}},...e])
        setComments(true)
        setaddOneToCommentCount(e=>e+1)
        setTextAreaData("")
        setMask(false)
    }).catch(e=>{
      console.log(e)
    })
  }



const LoadMoreComments=()=>{
  setSkip(e=>e+3)
}


const addLikeInTime=(newLikesNumber)=>{
  setLikesNumber(e=>+newLikesNumber)
}
const openshowLikesUserNames=()=>{
  setLikesModal(e=>!e)
}
const closeComponenet=()=>{
setSettings({state:false,firstClick:false})

}
const deleteCommentInCurrentTimefn=(commentIdDeleted)=>{
  setCommentsData(arrayOfComment=>{
   return [...arrayOfComment.filter(e=>{
     return e._id!=commentIdDeleted
   })]
  })
}
  return (
    <div className={Styles.container}>
      {likesModal&&<ShowLikesUserNames closepopUp={openshowLikesUserNames} postid={props.id}></ShowLikesUserNames>}
      <div className={Styles.userImageAndNameAndTimeAndSettings}>
        <div className={Styles.userImage}><img src={props.ownerOfPostImage||"/avatar.png"} alt={user.userName || ""}/></div>
        <div className={Styles.Name}>
        <h3 className={Styles.nameh3}>{props.userName}</h3>
        <h3 className={Styles.date}>{props.date.slice(0,10)} {props.date.slice(11,16)}</h3>
        </div><div className={Styles.settings} onClick={() => ShowSettings()}>{settings && <SettingsPost closeComponenetfn={closeComponenet} currentUserId={user._id} ownerid={props.ownerid} token={user.token} postid={props.id}></SettingsPost>}</div>
      </div>
      {props.text.length < 50 && <div className={Styles.text}><p>{props.text}</p></div>}
      {props.text.length > 50 && <div className={Styles.text}><p>{props.text.slice(0, slice)}{slice != -1 && <span onClick={() => completeText(-1)}>...</span>}</p></div>}
      {props.image && <div className={Styles.imageContainer}><img src={props.image} /></div>}
      <div className={Styles.likesAndComments}>
        <div className={Styles.Comments} onClick={() => openComments()} commentsnumbers={coummentNumber+addsOneToCommentCount}><svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z" fill="#212121" /></svg></div>
        <div className={Styles.likes}  >
            <Heart  addLikeInTime={(e)=>addLikeInTime(e)} token={user.token} postid={props.id}></Heart>
            <p className={Styles.likesNumber} onClick={()=>openshowLikesUserNames()}>{likesNumber}</p>
          </div>
        
      </div>
      <div className={Styles.userAddComments}>
        <div className={Styles.userImageInComments}>
          <img src={user.currentImageUrl || "/avatar.png"} />
        </div>
        <div className={Styles.textAreaContainer}>
        <textarea placeholder={"say somthing"}  onChange={(e)=>textAreaHolder(e)} value={textAreaData} className={Styles.textArea}/>
        <div className={Styles.countLettres}><span className={Styles.countLettresCss} style={countLettres>=1000?{color:"red"}:{}}>{countLettres} : 1000</span></div>

        </div>
        <div className={Styles.emojiAndMaskAndPost}>
        <div className={Styles.openOrCloseEmojiPicker} onClick={()=>closeOrOpenEmojiPicker()}>
          <div className={Styles.emojiLogo}><Emoji emoji={{ id: 'smiling_face_with_3_hearts', skin: 3 }} size={16} /></div>
          {closeOrOpenEmojiPickerState&&<div className={Styles.emojiPickerContainer}><Picker  perLine={EmojiContainerHeight}  onSelect={(e)=>addEmoji(e)} /></div>}

        </div>
        <div className={Styles.mask} ref={maskRef} postanonymously={language.postAnonymously} onClick={() => maskOn()}><Masksvg></Masksvg></div>
        <div className={Styles.postAndCounterContainer}>
           <span className={Styles.postText} onClick={()=>{AddComment()}}><SentSvg></SentSvg></span>
          </div>
        </div>
      </div>
      {comments && <div className={Styles.commentsContainer}>
        {commentsData.map(e=>
        {
          return  <Comment currentUserId={user._id} ownerid={e.commentOwner} deleteCommentInCurrentTime={deleteCommentInCurrentTimefn} postid={props.id} publication={true} likesNumber={e.likes} token={user.token} date={e.date} commentid={e._id} key={e._id} text={e.commentText} name={e.commentOwner.userName} userProfileImageUrl={e.commentOwner.currentImageUrl}></Comment>
        }
        )}
        {moreComments&&<div className={Styles.loadMoreComments} onClick={()=>LoadMoreComments()}><p>View more comments</p></div>}
      </div>}
    </div>

  )
}
export default publication
const Masksvg=()=>{
  return <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="outline"><path d="m491.062 136.609a8 8 0 0 0 -8.719 1.734l-18.343 18.344v-60.687a8 8 0 0 0 -13.314-5.979l-46.246 41.107a82.549 82.549 0 0 1 -54.899 20.872 97.989 97.989 0 0 0 -69.741 28.889l-7.8 7.8-5.805-5.806a104.745 104.745 0 0 0 -74.554-30.883 75.088 75.088 0 0 1 -38.5-10.611l10.559-35.227a102.439 102.439 0 0 0 -10.253-81.962l-2.587-4.312a8 8 0 0 0 -11.66-2.288 102.749 102.749 0 0 0 -40.1 69.1l-.953 7.618-4.834-4.3a7.99 7.99 0 0 0 -12.613 2.725 88.455 88.455 0 0 0 -56.7-20.743 8 8 0 0 0 -8 8v16a88.451 88.451 0 0 0 32 67.868v10.191a32 32 0 0 0 -22.628 54.628l6.2 6.2-15.51 124.121a7.991 7.991 0 0 0 1.282 5.43l16 24a8 8 0 0 0 11.094 2.218l3.562-2.375v43.719a8 8 0 0 0 2.343 5.657l24 24a8 8 0 0 0 11.314 0l24-24a8 8 0 0 0 2.316-6.321l-7.5-89.971a76.637 76.637 0 0 0 19.811 2.635h31.432a75.785 75.785 0 0 0 53.941-22.343l.687-.686a30.624 30.624 0 0 1 43.312 0l12.687 12.686a8 8 0 0 0 11.314 0l12.687-12.686a30.624 30.624 0 0 1 43.312 0l.687.686a75.785 75.785 0 0 0 53.941 22.343h19.716v144a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-153.151a76.452 76.452 0 0 0 40-67.133v-123.716a8 8 0 0 0 -4.938-7.391zm-369.689 45.45-27.314-27.315v-10.744a16 16 0 0 1 27.313-11.313l22.059 22.058a16 16 0 0 1 -11.313 27.314zm-27.314 20.686-20.687-20.686 12.687-12.687 20.686 20.687zm28.767-140.6 7.517 7.516a8 8 0 0 0 8.187 1.933l12.924-4.308a86.486 86.486 0 0 1 .386 14.512l-21.386 5.347-12.491-12.496a86.745 86.745 0 0 1 4.863-12.508zm19.038-25.945a86.04 86.04 0 0 1 6.34 15.3l-10.043 3.348-6.828-6.828a86.291 86.291 0 0 1 10.531-11.82zm-27.51 57.465 7.989 7.988a8 8 0 0 0 7.6 2.1l19.145-4.786c-.23.864-.449 1.73-.707 2.589l-8.192 27.307-7.5-7.5a31.808 31.808 0 0 0 -12.94-7.856l-7.086-6.3zm-17.286 21.1q-.537.239-1.068.5v-1.448zm-65.068-26.313a72 72 0 0 1 16 3.726v19.822h-14.172a71.4 71.4 0 0 1 -1.828-16zm7.55 39.548h16.45a8 8 0 0 0 8-8v-19.8a71.77 71.77 0 0 1 16 14.58v18.209a32 32 0 0 0 -1.941 11.011v10.744l-16.4-16.4a8 8 0 0 0 -13.3 3.3 72.6 72.6 0 0 1 -8.809-13.644zm27.194 38.058-2.744 2.742v-5.49zm-30.058 28.687a15.9 15.9 0 0 1 11.314-4.686h10.744l27.315 27.314v10.745a16 16 0 0 1 -27.314 11.313l-22.058-22.059a16.017 16.017 0 0 1 -.001-22.627zm5.533 178.161-9.911-14.867 13.6-108.815 1.522 1.521a32.029 32.029 0 0 0 8.57 6.129v106.845zm37.781 71.781-16-16v-51.072l4.438-2.959a8 8 0 0 0 3.562-6.656v-107.946a31.852 31.852 0 0 0 9.474-2.033l14.246 170.946zm360 35.313h-16v-136.128a76.3 76.3 0 0 0 16-2.607zm40-212.284a60.285 60.285 0 0 1 -60.284 60.284h-31.432a59.89 59.89 0 0 1 -42.627-17.657l-.686-.687a46.631 46.631 0 0 0 -65.942 0l-7.029 7.031-7.029-7.031a46.631 46.631 0 0 0 -65.942 0l-.686.687a59.89 59.89 0 0 1 -42.627 17.657h-31.432a60.71 60.71 0 0 1 -21.247-3.895l-6.5-78.011a31.762 31.762 0 0 0 5.523-17.976v-10.745l19.314-19.314h10.745a32 32 0 0 0 32-32c0-.788-.038-1.569-.094-2.346a91.152 91.152 0 0 0 27.616 4.287 88.849 88.849 0 0 1 63.24 26.195l11.462 11.462a8 8 0 0 0 11.314 0l13.454-13.457a82.094 82.094 0 0 1 58.43-24.2 98.541 98.541 0 0 0 65.529-24.913l32.93-29.273v62.186a8 8 0 0 0 13.657 5.657l18.343-18.344z"/><path d="m430.824 240.479 8.6-21.507a8 8 0 0 0 -7.424-10.972h-49.167a70.837 70.837 0 0 0 -63.354 39.155l-6.634 13.267a8 8 0 0 0 6.163 11.516l48.262 6.034a60.927 60.927 0 0 0 7.533.469 60.4 60.4 0 0 0 56.021-37.962zm-36.216 17.273a44.211 44.211 0 0 1 -25.354 4.343l-37.041-4.63 1.576-3.154a54.836 54.836 0 0 1 49.044-30.311h37.351l-4.215 10.537a44.34 44.34 0 0 1 -21.361 23.215z"/><path d="m232.521 247.156a70.834 70.834 0 0 0 -63.354-39.156h-49.167a8 8 0 0 0 -7.428 10.972l8.6 21.507a60.351 60.351 0 0 0 63.554 37.493l48.262-6.034a8 8 0 0 0 6.163-11.516zm-49.775 14.944a44.384 44.384 0 0 1 -46.715-27.559l-4.215-10.541h37.351a54.832 54.832 0 0 1 49.044 30.312l1.576 3.153z"/><path d="m384 288h16v16h-16z"/><path d="m120 280h16v16h-16z"/><path d="m152 288h16v16h-16z"/><path d="m416 280h16v16h-16z"/><path d="m432 256h16v16h-16z"/><path d="m104 256h16v16h-16z"/></g></svg>
}
const SentSvg=()=>{
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_95" data-name="Layer 95"><path d="M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94Z"/><path d="M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"/><path d="M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"/><path d="M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"/></g></svg>
      )
}
const SettingsPost=(props)=>{
  const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 
 const deleteImageFn=()=>{
     deletePost({postid:props.postid},props.token).then(result=>{
      location.reload();
      }).catch(error=>{
          console.log(error)
      })
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