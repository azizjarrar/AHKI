import React from 'react'
import Styles from './publication.module.scss'
import Comment from '../comment/comment'
import EmojiPicker from '../emojiPicker/emojiPicker'
import CommentOrPostSettings from '../commentOrPostSettings/commentOrPostSettings'
import languageDoc from '../Language/Language'

const publication = (props) => {
    const [slice,setSlice]=React.useState(100)
    const [comments,setComments]=React.useState(false)
    const [closeEmojiDisplayS, setcloseEmojiDisplayS] = React.useState(false)
    const [settings,setSettings]=React.useState(false)
    const [language,setlanguage]=React.useState({
        placeholderInput:languageDoc.Language.placeholderInput["eng"],
       })
       React.useEffect(() => {
         console.log(languageDoc.Language.placeholderInput[localStorage.getItem("language")])
        setlanguage({
          placeholderInput:languageDoc.Language.placeholderInput[localStorage.getItem("language")],
         })
      
       }, [])
    const completeText=(e)=>{
        setSlice(e)
    }
    const openComments=()=>{
        setComments(e=>!e)
    }
    const openEmojiDisplay = () => {
        setcloseEmojiDisplayS((e)=>!e)
      }
      const closeEmojiDisplay = () => {
        setcloseEmojiDisplayS(false)
      }
      const getSelectedEmoji=(e,pack)=>{
          let text=document.getElementsByClassName(Styles.inputContenteditable)[props.index-1]
          text.innerHTML = text.innerHTML + (`<img   src=/${e}>`)
      }
      const ShowSettings=()=>{
        setSettings(e=>!e)
      }
    return (
        <div className={Styles.container}>
            <div className={Styles.userImageAndNameAndTimeAndSettings}><div className={Styles.userImage}></div><div className={Styles.Name}><h3 className={Styles.nameh3}>Aziz Jarrar</h3></div><div className={Styles.settings} onClick={()=>ShowSettings()}>{settings&&<CommentOrPostSettings></CommentOrPostSettings>}</div></div>
             {props.text.length<50&&<div className={Styles.text}><p>{props.text}</p></div>}
             {props.text.length>50&&<div className={Styles.text}><p>{props.text.slice(0,slice)}{slice!=-1&&<span onClick={()=>completeText(-1)}>...</span>}</p></div>}
             {props.image&&<div className={Styles.imageContainer}><img src={props.image}/></div>}
             <div className={Styles.likesAndComments}>
             <div className={Styles.likes} likesnumber="156"><svg width="69" height="62" viewBox="0 0 69 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.7765 4.47191C53.9871 -2.25216 41.9525 -1.24217 34.5 6.54723C27.0475 -1.24217 15.0129 -2.26599 7.22345 4.47191C-2.91092 13.2298 -1.4285 27.508 5.79493 35.0761L29.4328 59.8002C30.7805 61.2114 32.5863 62 34.5 62C36.4271 62 38.2195 61.2252 39.5672 59.814L63.2051 35.0899C70.415 27.5219 71.9244 13.2436 61.7765 4.47191ZM58.5961 30.4135L34.9582 55.1376C34.6348 55.4696 34.3652 55.4696 34.0418 55.1376L10.4039 30.4135C5.48497 25.2667 4.48771 15.5265 11.3877 9.56338C16.6301 5.03916 24.716 5.7171 29.7832 11.0161L34.5 15.9554L39.2168 11.0161C44.3109 5.68943 52.3969 5.03916 57.6123 9.54954C64.4988 15.5127 63.4746 25.3082 58.5961 30.4135Z" fill="#1876f3"/></svg></div>
             <div className={Styles.Comments} onClick={()=>openComments()} commentsnumbers="651656"><svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z" fill="#1876f3"/></svg></div>
             </div>
             <div className={Styles.userAddComments}>
                 <div className={Styles.userImageInComments}></div>
                 <div className={Styles.inputContainer}>
                     <div className={Styles.inputAndBtns}>
                     <div contentEditable="true"  date-text-placeholder={language.placeholderInput}  className={Styles.inputContenteditable}></div>
                     <div className={Styles.btns}>
                     <div className={Styles.EmojiLogo}><img src="/Emoji/Pack1/051-cool.svg" onClick={() => openEmojiDisplay()} />{closeEmojiDisplayS && <EmojiPicker fn1={(e,pack) => getSelectedEmoji(e,pack)} fn={() => closeEmojiDisplay()}></EmojiPicker>}</div>
                     <div className={Styles.post}><p>Post</p></div>
                     </div>
                     </div>

                 </div>
             </div>
             {comments&&<div className={Styles.commentsContainer}>
                 <Comment text={"كما أضاف: أسوأ سيناريو أصبح وراءنا. نحن نعرف المزيد عن الفيروس مقارنة بعام 2020، عندما بدأ الفيروس للتو في الانتشار، بحسب ما ذكرته قناة آر دي DR التلفزيونية الدنماركية."}></Comment>
                 <Comment text={"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uncha"}></Comment>
                 <Comment text={"1500s, when an unknown"}></Comment>
                 <Comment text={"1500s, simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "}></Comment>
                 <Comment text={"able English. Many desktop publishing packages and web"}></Comment>
                 <Comment text={"1500s, when an unknown"}></Comment>
             </div>}
             </div>
            
   )
}
export default publication
