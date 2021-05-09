import React from 'react'
import Style from './heartComment.module.scss'
import {addLikeToComment,checklikeToComment,dislikeToComment} from '../../services/post_likes'
import {addLikeToCommentImage,checklikeToCommentImage,dislikeToCommentImage} from '../../services/imageLikes'
const HeartComment = (props) => {
    const [clicked,setClicked]=React.useState(false)
    React.useEffect(()=>{
        if(props.imgid!=undefined){
            checklikeToCommentImage({commentid:props.commentid},props.token).then(result=>{
                if(result.data.data!=null){
                    setClicked(true)
                }else{
                    setClicked(false)
                }
            }).catch(e=>{
                console.log(e)
            })
        }else{
            if(props.token!=false){
                checklikeToComment({commentid:props.commentid},props.token).then(result=>{
                    if(result.data.data!=null){
                        setClicked(true)
                    }else{
                        setClicked(false)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }
        }
 
    },[])

    const sendLikeOrDislike=()=>{
        if(props.token!=false){
            if(props.imgid!=undefined ){
                if(clicked==true){
                    dislikeToCommentImage({commentid:props.commentid},props.token).then(result=>{
                        props.addLikeInTime(-1)
                        setClicked(false)
                    }).catch(e=>{
                        console.log(e)
                    })
                }else{
                    addLikeToCommentImage({commentid:props.commentid},props.token).then(result=>{
                        props.addLikeInTime(1)
                        setClicked(true)
                    }).catch(e=>{
                        console.log(e)
                    })
                }
            }else{
                if(clicked==true){
                    dislikeToComment({commentid:props.commentid},props.token).then(result=>{
                        props.addLikeInTime(-1)
                        setClicked(false)
                    }).catch(e=>{
                        console.log(e)
                    })
                }else{
                    addLikeToComment({commentid:props.commentid},props.token).then(result=>{
                        props.addLikeInTime(1)
                        setClicked(true)
                    }).catch(e=>{
                        console.log(e)
                    })
                }
            }
        }
    }
    
    return (
        
        <div className={Style.heart} style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} onClick={()=>sendLikeOrDislike()}>
            {clicked&&<div className={Style.heartFaded}  style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} ></div>}
      
        </div>
    )
}

export default HeartComment
