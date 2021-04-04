import React from 'react'
import Style from './biggerImagewithcomments.module.scss'
import {getImageData} from '../../services/images'
import Heart from '../../components/heart/heart'
const biggerImagewithcomments = (props) => {
    const [currentimage,setCurrentimage]=React.useState({})
    const [nextimage,setNextimage]=React.useState()
    const [previmage,setPrevimage]=React.useState()
    const [comments,setComments]=React.useState([])
    const [setOwnerOfImageData,setSetOwnerOfImageData]=React.useState({})
    React.useState(()=>{
        getImageData({currentImgId:props.imgid,userid:props.userid},props.token).then(result=>{
            setSetOwnerOfImageData(result.data.userData)
            setCurrentimage(e=>{
                return {...result.data.currentimage}
            })
            setNextimage(e=>{
                return{...result.data.nextimage.userProfileImagesUrl[0]}
            })
            setPrevimage(e=>{
                return {...result.data.previmage.userProfileImagesUrl[0]}
            })
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const goPrev=()=>{
        getImageData({currentImgId:previmage._id,userid:props.userid},props.token).then(result=>{
            setCurrentimage(e=>{
                return {...e,...result.data.currentimage}
            })
            setNextimage(e=>{
                return{...result.data.nextimage.userProfileImagesUrl[0]}
            })
            setPrevimage(e=>{
                return {...result.data.previmage.userProfileImagesUrl[0]}
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    const gonext=()=>{
        getImageData({currentImgId:nextimage._id,userid:props.userid},props.token).then(result=>{
            console.log(result)
            setCurrentimage(e=>{
                return {...e,...result.data.currentimage}
            })
            setNextimage(e=>{
                console.log(result.data.nextimage.userProfileImagesUrl[0])
                return{...result.data.nextimage.userProfileImagesUrl[0]}
            })
            setPrevimage(e=>{
                return {...result.data.previmage.userProfileImagesUrl[0]}
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className={Style.container}>
            <div className={Style.closeBtn} onClick={()=>props.close()}></div>
            <div className={Style.imageContainer}>
                <img src={currentimage.imageUrl||""}/>
                {previmage!=undefined&&previmage._id!=undefined&&<div className={`${Style.SwitchImage} ${Style.left}`} onClick={()=>goPrev()}><span>&#x2039;</span></div>}
                {nextimage!=undefined&&nextimage._id!=undefined&&<div className={`${Style.SwitchImage} ${Style.Right}`} onClick={()=>gonext()}><span>&#x203A;</span></div>}
            </div>
            <div className={Style.commentsContainer}>
                <div className={Style.imageOwnerAndNameAndDateAndParams}>
                    <div className={Style.imageContainerForUserCommentsSection}><img src={setOwnerOfImageData.currentImageUrl}/></div>
                    <div className={Style.UserNameAndDate}>
                       <p>{setOwnerOfImageData.userName}</p>
                       {currentimage.date!=undefined&&<p>{currentimage.date.slice(0,10)} {currentimage.date.slice(11,16)}</p>}
                    </div>
                    <div className={Style.Params}>&hellip;</div>
                </div>
                {console.log(currentimage)}
                {currentimage.imageText!=undefined&&<div className={Style.bio}><p>{currentimage.imageText}</p></div>}
                <div className={Style.LikesAndCommentsContainer}>
                <div className={Style.Comments}  commentsnumbers={"0"}>
                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z" fill="#212121" /></svg>
                    <p className={Style.CommentsNumber} >{0}</p>
                    </div>
                  <div className={Style.likes}  >
                    <Heart   token={props.token} postid={"props.id"}></Heart>
                    <p className={Style.likesNumber} >{0}</p>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default biggerImagewithcomments
