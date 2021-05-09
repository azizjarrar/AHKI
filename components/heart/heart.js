import React from 'react'
import Style from './heart.module.scss'
import {addLikeToPost,checklikeToPost,dislikePost} from '../../services/post_likes'
import {addLikeToImage,checklikeToImage,dislikeImage} from '../../services/imageLikes'
const heart = (props) => {
    const [clicked,setClicked]=React.useState(false)
    React.useEffect(()=>{
        if(props.imgid!=undefined){
            if(props.token!=false){
                checklikeToImage({imageid:props.imgid},props.token).then(result=>{
                    if(result.data.data!=null){
                        setClicked(true)
                    }else{
                        setClicked(false)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }

        }else{
            if(props.token!=false){

            checklikeToPost({postid:props.postid},props.token).then(result=>{
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

    },[props.imgid]) // badaltha kenet props khw ou ki keent props khw ay tabdila i awed ya3beth checklikedtoImage api

    const sendLikeOrDislike=()=>{
        if(props.token!=false){
            if(props.imgid!=undefined){
                if(clicked==true){
    
                    dislikeImage({imageid:props.imgid},props.token).then(result=>{
                        props.addLikeInTime(-1)
                        setClicked(false)
                    }).catch(e=>{
                        console.log(e)
                    })
                }else{
                    addLikeToImage({imageid:props.imgid},props.token).then(result=>{
                        props.addLikeInTime(1)
                        setClicked(true)
                    }).catch(e=>{
                        console.log(e)
                    })
                } 
            }else{
                if(clicked==true){
                    dislikePost({postid:props.postid},props.token).then(result=>{
                        props.addLikeInTime(-1)
                        setClicked(false)
                    }).catch(e=>{
                        console.log(e)
                    })
                }else{
                    addLikeToPost({postid:props.postid},props.token).then(result=>{
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

export default heart
