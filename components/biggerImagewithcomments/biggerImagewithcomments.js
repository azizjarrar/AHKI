import React from 'react'
import Style from './biggerImagewithcomments.module.scss'
import { getImageData } from '../../services/images'
import Heart from '../../components/heart/heart'
import userContext from '../../context/userContext'
import { Picker,Emoji  } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import LanguageContext from '../../context/languageContext'
import {addCommentToImage,getCommentsImage,countComments} from '../../services/imageComments'
import {countImageLikes} from '../../services/imageLikes'
import {deleteImage} from '../../services/images'

import Comment from '../comment/comment'
import ShowLikesUserNames from '../showLikesUserNames/showLikesUserNames'
import PopUpMessage from '../../components/popUpMessage/popUpMessage'

const biggerImagewithcomments = (props) => {
    const [currentimage, setCurrentimage] = React.useState({})// has the data of the current image
    const [nextimage, setNextimage] = React.useState() // has id of next image
    const [previmage, setPrevimage] = React.useState() //has id fo prev image
    const [comments, setComments] = React.useState(false)//open or close comments
    const [imageLoading,setimageLoading]=React.useState(false)
    const [likesNumber,setLikesNumber]=React.useState(0)
    const [coummentNumber,setCoummentNumber]=React.useState(0)
    const [setOwnerOfImageData, setSetOwnerOfImageData] = React.useState({
        userData:{
            currentImageUrl:"",
            userName:""
        }
    })
    const [user,setUser]=React.useContext(userContext)//user data
    const [textAreaData,setTextAreaData]=React.useState("") // text area for add comment
    const [countLettres,setCountLettres]=React.useState(0) // count how many lettre in text area
    const [closeOrOpenEmojiPickerState,setcloseOrOpenEmojiPickerState]=React.useState(false)//emoji handler
    const [language , setLanguage]=React.useContext(LanguageContext)
    const [skip,setSkip]=React.useState(0)//fetch data with skip
    const [commentsData,setCommentsData]=React.useState([])//comments Container
    const [addsOneToCommentCount,setaddOneToCommentCount]=React.useState(0)//when add comment automaticly add + to old one
    const [moreComments,setMoreComments]=React.useState(false) //show more comment fetch  with 3 by 3
    const [likesModal,setLikesModal]=React.useState(false)// show modal has all the name of who put like
    const [settings, setSettings] = React.useState({state:false,firstClick:false}) //show settings on click on 3 dots ...
   /*************************************************************/
   /*********************use effects*****************************/
   /*************************************************************/
    React.useState(() => {
        /*he i fetch cureent img data and the next and prev image id */
        setimageLoading(true)

        getImageData({ currentImgId: props.imgid, userid: props.userid }, props.token).then(result => {
            setimageLoading(false)
            setSetOwnerOfImageData(result.data)
            setCurrentimage(e => {
                return { ...result.data.currentimage }
            })
            setNextimage(e => {
                return { ...result.data.nextimage}
            })
            setPrevimage(e => {
                return { ...result.data.previmage }
            })
        }).catch(error => {
            console.log(error)
        })
   
    }, [])
    /*calc textArea length */
    React.useEffect(()=>{
        setCountLettres(textAreaData.length)
      },[textAreaData])
      //when i change image fetch ne data of the current image
    React.useEffect(()=>{
        setCommentsData([])
        setSkip(0)
        setComments(false)
        countImageLikes({ imageid: currentimage._id||props.imgid}, props.token).then(result=>{
            setLikesNumber(result.data.count)
        }).catch(error=>{
            console.log(error)
        })
        if(currentimage._id!=undefined){
          getCommentsImage({imageid:currentimage._id||props.imgid,skip:0},user.token).then(result=>{
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
            countComments({imageid:currentimage._id||props.imgid,skip:0},user.token).then(result=>{
                setCoummentNumber(result.data.count)
            }).catch(error=>{
                alert(error)

            })
        }

    },[currentimage._id])//hedhi kenet t3awed tfetchi
    //when i click load more comments get 3 new comment evry time
    React.useEffect(()=>{
      if(skip!=0){
          getCommentsImage({imageid:currentimage._id||props.imgid,skip:skip},user.token).then(result=>{
              if(result.data.data.length>0){
                  setMoreComments(true)
              }else{
                  setMoreComments(false)
              }
              setCommentsData(e=>[...e,...result.data.data])
            }).catch(error=>{
                alert(error)
            })
      }
  },[skip])
      const LoadMoreComments=()=>{
        setSkip(e=>e+3)
      }
      /* go to prev image */
    const goPrev = () => {
        setimageLoading(true)
        getImageData({ currentImgId: previmage._id, userid: props.userid }, props.token).then(result => {
            
            setimageLoading(false)
            setCurrentimage(e => {
                return { ...e, ...result.data.currentimage }
            })
            setNextimage(e => {
                return { ...result.data.nextimage }
            })
            setPrevimage(e => {
                return { ...result.data.previmage }
            })
        }).catch(error => {
            console.log(error)
        })
    }
    // go to next image
    const gonext = () => {
        setimageLoading(true)
        getImageData({ currentImgId: nextimage._id, userid: props.userid }, props.token).then(result => {
            setimageLoading(false)
            setCurrentimage(e => {
                return { ...e, ...result.data.currentimage }
            })
            setNextimage(e => {
                return { ...result.data.nextimage }
            })
            setPrevimage(e => {
                return { ...result.data.previmage }
            })
        }).catch(error => {
            console.log(error)
        })
    }
    /* set the height of text area and when text get bigger textarea get biiger with it */
    const textAreaHolder=(e)=>{
        e.target.style.height = "16px";
        e.target.style.height = (e.target.scrollHeight)+"px";
        //only take 200 char
        setTextAreaData(el=>{
          if(el.length<=200){
            return e.target.value
          }else{
           return el.slice(0,200)
          }
        })
      }
      /* close emoji comp */
      const closeOrOpenEmojiPicker=()=>{
        setcloseOrOpenEmojiPickerState(e=>!e)
      }
      //add commnent
      const AddComment=()=>{
        addCommentToImage({imageid:currentimage._id,commentText:textAreaData},user.token).then((result)=>{
            setCommentsData(e=>[{...result.data.data,commentOwner:{userName:user.userName,currentImageUrl:user.currentImageUrl,_id:user._id}},...e])
            setComments(true)
            setaddOneToCommentCount(e=>e+1)
            setTextAreaData("")
        }).catch(error=>{
          console.log(error)
        })
      }
      //add emojo to textarea
      const addEmoji=(e)=>{
        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)
        setTextAreaData(el=>{
          if(el.length<=200){
            return el+emoji
          }else{
            return el.slice(0,200)
          }
        })
      };
      // open or close comments
      const openComments = () => {
        setComments(e => !e)
      }
      //when you like image it will add in time to numbers of likes
      const addLikeInTime=(newLikesNumber)=>{
        setLikesNumber(e=>e+newLikesNumber)
      }
      // show usernames of people who liked image
      const openshowLikesUserNames=()=>{
        setLikesModal(e=>!e)
      }
      //show settings delete report 
      const ShowSettings = () => {
          if(settings.firstClick!=true){
            setSettings({state:true,firstClick:true})
          }
      }
      // close settings componnent
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
        <div className={Style.container}>
            {likesModal&&<ShowLikesUserNames closepopUp={openshowLikesUserNames} imgid={currentimage._id||props.imgid}></ShowLikesUserNames>}
            <div className={Style.closeBtn} onClick={() => props.close()}></div>
            <div className={Style.imageContainer}>
                {imageLoading&&<div className={Style.loadingAnimation}><div className={Style.ldsring}><div></div><div></div><div></div><div></div></div></div>}
                <img src={currentimage.imageUrl || ""} />
                {previmage != undefined && previmage._id != undefined && <div className={`${Style.SwitchImage} ${Style.left}`} onClick={() => goPrev()}><span>&#x2039;</span></div>}
                {nextimage != undefined && nextimage._id != undefined && <div className={`${Style.SwitchImage} ${Style.Right}`} onClick={() => gonext()}><span>&#x203A;</span></div>}
            </div>
            <div className={Style.commentsContainer}>
                <div className={Style.imageOwnerAndNameAndDateAndParams}>
                    
                    <div className={Style.imageContainerForUserCommentsSection}><img src={setOwnerOfImageData.userData.currentImageUrl} /></div>
                    <div className={Style.UserNameAndDate}>
                        <p>{setOwnerOfImageData.userData.userName}</p>
                        {currentimage.date != undefined && <p>{currentimage.date.slice(0, 10)} {currentimage.date.slice(11, 16)}</p>}
                    </div>
                    <div className={Style.Params} onClick={() => ShowSettings("firstClick")}>{settings.state==true && <SettingsImage previmage={previmage} closeComponenetfn={closeComponenet}   userImageid={currentimage._id||props.imgid} currentUserId={user._id} ownerid={setOwnerOfImageData.currentimage.ImageOwner._id} token={user.token} ></SettingsImage>}&hellip;</div>
                </div>
                {currentimage.imageText != undefined && <div className={Style.bio}><p>{currentimage.imageText}</p></div>}
                <div className={Style.LikesAndCommentsContainer}>
                   <div   className={Style.Comments} onClick={()=>{openComments()}}>
                        <svg  width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z" fill="#212121" /></svg>
                        <p  key="unha" className={Style.CommentsNumber} >{coummentNumber+addsOneToCommentCount}</p>
                    </div>
                    <div className={Style.likes}  >
                        <Heart addLikeInTime={(e)=>addLikeInTime(e)}  imgid={currentimage._id||props.imgid} token={props.token} ></Heart>
                        <p className={Style.likesNumber}  onClick={()=>openshowLikesUserNames()}>{likesNumber}</p>
                    </div>
                </div>
                <div className={Style.userAddComments}>
                    <div className={Style.userImageInComments}>
                        <img src={user.currentImageUrl || "/avatar.png"} />
                    </div>
                    <div className={Style.textAreaContainer}>
                        <textarea placeholder={"say somthing"} onChange={(e) => textAreaHolder(e)} value={textAreaData} className={Style.textArea} />
                        <div className={Style.countLettres}><span className={Style.countLettresCss} style={countLettres >= 200 ? { color: "red" } : {}}>{countLettres} : 200</span></div>

                    </div>
                    <div className={Style.emojiAndMaskAndPost}>
                        <div className={Style.openOrCloseEmojiPicker} onClick={() => closeOrOpenEmojiPicker()}>
                            <div className={Style.emojiLogo}><Emoji emoji={{ id: 'smiling_face_with_3_hearts', skin: 3 }} size={24} /></div>
                            {closeOrOpenEmojiPickerState && <div className={Style.emojiPickerContainer}><Picker perLine={8} onSelect={(e) => addEmoji(e)} /></div>}

                        </div>
                        <div className={Style.postAndCounterContainer}>
                            <span className={Style.postText} onClick={() => { AddComment() }}><SentSvg></SentSvg></span>
                        </div>
                    </div>
                </div>
            {comments && <div className={Style.commentsData}>
            {commentsData.map(e=>
            {
            return  <Comment currentUserId={user._id} ownerid={e.commentOwner} deleteCommentInCurrentTime={deleteCommentInCurrentTimefn} imgid={currentimage._id||props.imgid}  token={user.token} date={e.date} commentid={e._id} key={e._id} text={e.commentText} name={e.commentOwner.userName} userProfileImageUrl={e.commentOwner.currentImageUrl}></Comment>
            }
            )}
            {moreComments&&<div className={Style.loadMoreComments} onClick={()=>LoadMoreComments()}><p>View more comments</p></div>}
            </div>}
            </div>

        </div>
    )
}

export default biggerImagewithcomments

const SentSvg=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_95" data-name="Layer 95"><path d="M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94Z"/><path d="M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"/><path d="M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"/><path d="M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"/></g></svg>
        )
}
// this is the comp of image settings
const SettingsImage=(props)=>{
    // error handler
    const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 
   const deleteImageFn=()=>{
        deleteImage({imageid:props.userImageid,previmage:props.previmage},props.token).then(result=>{
            if(result.data.state==true){
                //if you have only one image you cant deleted
                setErrorMessage(e=>{
                    return {...e,state:true,text:"you should at least have one image"}
                })

            }else{
                location.reload();

            }
            //location.reload();
        }).catch(error=>{
            console.log(error)
        })
    }
    const closePopUp=()=>{
        setErrorMessage({state:false,text:""})
      }
    return (
            <div className={Style.containerSettings}>
                {errorMessage.state==true&&<PopUpMessage fnclose={()=>closePopUp()} openPopUp={errorMessage}></PopUpMessage>}
                <div className={Style.paramsContainer}><h3>Report</h3></div>
                {props.ownerid==props.currentUserId&&<div className={Style.paramsContainer} onClick={()=>deleteImageFn()}><h3>Delete</h3></div>}
                <div className={Style.paramsContainer} onClick={()=>props.closeComponenetfn()}><h3>Close</h3></div>
            </div>
            )
}