import React from 'react'
import Styles from './publication.module.scss'
import Comment from '../comment/comment'
import EmojiPicker from '../emojiPicker/emojiPicker'
import CommentOrPostSettings from '../commentOrPostSettings/commentOrPostSettings'
import LanguageContext from '../../context/languageContext'
const publication = (props) => {
  const [slice, setSlice] = React.useState(100)
  const [comments, setComments] = React.useState(false)
  const [closeEmojiDisplayS, setcloseEmojiDisplayS] = React.useState(false)//if its true emoji container will be open if its false it will be close
  const [settings, setSettings] = React.useState(false)
  const [mask, setMask] = React.useState(false)
  const [language , setLanguage]=React.useContext(LanguageContext)


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
  /************************************************/
  /****************open  emoji container************/
  /************************************************/
  const openEmojiDisplay = () => {
    setcloseEmojiDisplayS((e) => !e)
  }
  /****************************************/
  /*******close emoji container************/
  /****************************************/
  const closeEmojiDisplay = () => {
    setcloseEmojiDisplayS(false)
  }
  /***************************************************************/
  /****************select emoji and append it to input************/
  /***************************************************************/
  const getSelectedEmoji = (e, pack) => {
    let text = document.getElementsByClassName(Styles.inputContenteditable)[props.index - 1]
    text.innerHTML = text.innerHTML + (`<img   src=/${e}>`)
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
    /*************************************************************/
  /****************if mask on it will turn into blue************/
  /*************************************************************/
  React.useEffect(() => {
    if (mask) {
      document.getElementsByClassName(Styles.mask)[props.index - 1].childNodes[0].childNodes[0].style.fill = "#1876f3"

    } else {
      document.getElementsByClassName(Styles.mask)[props.index - 1].childNodes[0].childNodes[0].style.fill = "black"
    }
  }, [mask])
  return (
    <div className={Styles.container}>
      <div className={Styles.userImageAndNameAndTimeAndSettings}><div className={Styles.userImage}></div><div className={Styles.Name}><h3 className={Styles.nameh3}>Aziz Jarrar</h3></div><div className={Styles.settings} onClick={() => ShowSettings()}>{settings && <CommentOrPostSettings></CommentOrPostSettings>}</div></div>
      {props.text.length < 50 && <div className={Styles.text}><p>{props.text}</p></div>}
      {props.text.length > 50 && <div className={Styles.text}><p>{props.text.slice(0, slice)}{slice != -1 && <span onClick={() => completeText(-1)}>...</span>}</p></div>}
      {props.image && <div className={Styles.imageContainer}><img src={props.image} /></div>}
      <div className={Styles.likesAndComments}>
        <div className={Styles.likes} likesnumber="156"><svg width="69" height="62" viewBox="0 0 69 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.7765 4.47191C53.9871 -2.25216 41.9525 -1.24217 34.5 6.54723C27.0475 -1.24217 15.0129 -2.26599 7.22345 4.47191C-2.91092 13.2298 -1.4285 27.508 5.79493 35.0761L29.4328 59.8002C30.7805 61.2114 32.5863 62 34.5 62C36.4271 62 38.2195 61.2252 39.5672 59.814L63.2051 35.0899C70.415 27.5219 71.9244 13.2436 61.7765 4.47191ZM58.5961 30.4135L34.9582 55.1376C34.6348 55.4696 34.3652 55.4696 34.0418 55.1376L10.4039 30.4135C5.48497 25.2667 4.48771 15.5265 11.3877 9.56338C16.6301 5.03916 24.716 5.7171 29.7832 11.0161L34.5 15.9554L39.2168 11.0161C44.3109 5.68943 52.3969 5.03916 57.6123 9.54954C64.4988 15.5127 63.4746 25.3082 58.5961 30.4135Z" fill="#1876f3" /></svg></div>
        <div className={Styles.Comments} onClick={() => openComments()} commentsnumbers="651656"><svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z" fill="#1876f3" /></svg></div>
      </div>
      <div className={Styles.userAddComments}>
        <div className={Styles.userImageInComments}></div>
        <div className={Styles.inputContainer}>
          <div className={Styles.inputAndBtns}>
            <div contentEditable="true" datetextplaceholder={language.placeholderInput} className={Styles.inputContenteditable}></div>
            <div className={Styles.btns}>
              <div className={Styles.mask} postanonymously={language.postAnonymously} onClick={() => maskOn()}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="theater-masks" id={Styles.maskSvg} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path className={Styles.svgInternalID} fill="currentColor" d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z"></path></svg></div>

              <div className={Styles.EmojiLogo}><img src="/Emoji/Pack1/051-cool.svg" onClick={() => openEmojiDisplay()} />{closeEmojiDisplayS && <EmojiPicker fn1={(e, pack) => getSelectedEmoji(e, pack)} fn={() => closeEmojiDisplay()}></EmojiPicker>}</div>
              <div className={Styles.post}><p>Post</p></div>
            </div>
          </div>

        </div>
      </div>
      {comments && <div className={Styles.commentsContainer}>
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
