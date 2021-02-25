import React from 'react'
import Styles from './postUsersStorys.module.scss'
import EmojiPicker from '../emojiPicker/emojiPicker'
import { ST } from 'next/dist/next-server/lib/utils'
const PostTodayTopic = () => {
    const [closeEmojiDisplayS, setcloseEmojiDisplayS] = React.useState(false)
    const [imageOrVideo,setImageOrVideo]=React.useState(false)
    const [mask,setMask]=React.useState(false)
    const openEmojiDisplay = () => {
        setcloseEmojiDisplayS((e)=>!e)
      }
      const closeEmojiDisplay = () => {
        setcloseEmojiDisplayS(false)
      }
      const getSelectedEmoji=(e,pack)=>{
          let text=document.getElementsByClassName(Styles.input)[0]
          text.innerHTML = text.innerHTML + (`<img   src=${e}>`)
      }
      const changeFile=(e)=>{
        setImageOrVideo(URL.createObjectURL(e.target.files[0]))
      }
      const removeImage=()=>{
        setImageOrVideo(false)
      }
      const maskOn=()=>{
        setMask(e=>!e)
        

      }
      React.useEffect(()=>{
        if(mask){
          document.getElementsByClassName(Styles.mask)[0].childNodes[0].childNodes[0].style.fill="#1876f3"

        }else{
          document.getElementsByClassName(Styles.mask)[0].childNodes[0].childNodes[0].style.fill="black"

        }

      },[mask])
    return (
        <div className={Styles.container}>
            <div className={Styles.topic}>

            </div>
            <div className={Styles.userTopicContainer}>
                <div className={Styles.userImage}></div>
                <div className={Styles.postTopic}><p className={Styles.input} plaintext-only="true" contentEditable="true" role="textbox" maxLength="500"></p></div>
            </div>
            {imageOrVideo!=false&&<div className={Styles.image_video_Container}><div className={Styles.closeBtn} onClick={()=>removeImage()}></div><img src={imageOrVideo}/></div>}

            <div className={Styles.btnContainer}>
            <button>Post</button>   
            <div className={Styles.container_uploadImage_pickEmoji_mask}>
            <div className={Styles.uploadImage}><input onChange={e=>changeFile(e)} type="file"/><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg></div>
            <div className={Styles.EmojiLogo}><img src="Emoji/Pack1/051-cool.svg" onClick={() => openEmojiDisplay()} />{closeEmojiDisplayS && <EmojiPicker fn1={(e,pack) => getSelectedEmoji(e,pack)} fn={() => closeEmojiDisplay()}></EmojiPicker>}</div>
            <div className={Styles.mask} onClick={()=>maskOn()}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="theater-masks"  id={Styles.maskSvg} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path className={Styles.svgInternalID} fill="currentColor" d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z"></path></svg></div>
            </div>
            </div>
        </div>
    )
}

export default PostTodayTopic
