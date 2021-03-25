import React from 'react'
import Style from './heartComment.module.scss'
import {addLikeToPost,checklikeToPost,dislikePost} from '../../services/likes'
const HeartComment = (props) => {
    const [clicked,setClicked]=React.useState(false)
   /* React.useEffect(()=>{
        checklikeToPost({postid:props.postid},props.token).then(result=>{
            if(result.data.liked==true){
                
                setClicked(true)
            }else{
                setClicked(false)
            }
        }).catch(e=>{
            console.log(e)
        })
    },[])*/

    /*const sendLikeOrDislike=()=>{
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

    }*/
    
    return (
        
        <div className={Style.heart} style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} onClick={()=>sendLikeOrDislike()}>
            {clicked&&<div className={Style.heartFaded}  style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} ></div>}
      
        </div>
    )
}

export default HeartComment
