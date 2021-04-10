import React from 'react'
import Style from './heart.module.scss'
import {addLikeToPost,checklikeToPost,dislikePost} from '../../services/likes'
import {addLikeToImage,checklikeToImage,dislikeImage} from '../../services/imageLikes'
const heart = (props) => {
    const [clicked,setClicked]=React.useState(false)
    React.useEffect(()=>{
        if(props.imgid!=undefined){

            checklikeToImage({imgid:props.imgid},props.token).then(result=>{
                if(result.data.liked==true){
                    
                    setClicked(true)
                }else{
                    setClicked(false)
                }
            }).catch(e=>{
                console.log(e)
            })
        }else{
            checklikeToPost({postid:props.postid},props.token).then(result=>{
                if(result.data.liked==true){
                    
                    setClicked(true)
                }else{
                    setClicked(false)
                }
            }).catch(e=>{
                console.log(e)
            })
        }

    },[props])

    const sendLikeOrDislike=()=>{
        if(props.imgid!=undefined){
            if(clicked==true){
                dislikeImage({imgid:props.imgid},props.token).then(result=>{
                    console.log(result)
                    props.addLikeInTime(-1)
                    setClicked(false)
                }).catch(e=>{
                    console.log(e)
                })
            }else{
                addLikeToImage({imgid:props.imgid},props.token).then(result=>{
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
    
    return (
        
        <div className={Style.heart} style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} onClick={()=>sendLikeOrDislike()}>
            {clicked&&<div className={Style.heartFaded}  style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} ></div>}
      
        </div>
    )
}

export default heart
