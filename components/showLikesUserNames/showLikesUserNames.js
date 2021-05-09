import React from 'react'
import Style from './showLikesUserNames.module.scss'
import {getLikestUserNameFromPost,getLikestUserNameFromComment} from '../../services/post_likes'
import {getLikestUserNameFromCommentImage,getLikestUserNameFromImage} from '../../services/imageLikes'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
const followers = (props) => {
    const [user,setUser]=React.useContext(UserContext)
    const [users,setUsers]=React.useState([])

    React.useEffect(()=>{
        if(props.imgid!=undefined){
            if(props.showLikesForComment!=undefined && props.showLikesForComment==true){
                getLikestUserNameFromCommentImage({commentid:props.commentid},user.token).then(result=>{
                    console.log(result.data.data)
                    setUsers(e=>{
                  return [...e,...result.data.data]
               })
            }).catch(error=>{
                console.log(error)
            })
            }else{
                getLikestUserNameFromImage({imageid:props.imgid},user.token).then(result=>{
                    setUsers(e=>{
                  return [...result.data.data]
               })
            }).catch(error=>{
                console.log(error)
            })
            }
        }else{
            if(user._id!=undefined){
                if(props.showLikesForComment!=undefined && props.showLikesForComment==true){
                    getLikestUserNameFromComment({commentid:props.commentid},user.token).then(result=>{
                        setUsers(e=>{
                      return [...e,...result.data.data]
                   })
                }).catch(error=>{
                    console.log(error)
                })
                }else{
                    getLikestUserNameFromPost({postid:props.postid},user.token).then(result=>{
                        console.log(result)

                        setUsers(e=>{
                      return [...e,...result.data.data]
                   })
                }).catch(error=>{
                    console.log(error)
                })
                }
    
        }
        }

    },[user._id])
    React.useEffect(()=>{

    },[])
    return (
        <div className={Style.container}>
            <div className={Style.listContainer}>
                <div className={Style.header}><h1>Users</h1><div onClick={()=>props.closepopUp()} className={Style.closebtn}></div></div>
                <div className={Style.list}>
                {users.map(e=><Users key={e._id} userData={e.idOfWhoLikedImage || e.idOfWhoLikedPost || e.idOfWhoLikedComment}></Users>)}
                </div>
            </div>
        </div>
    )
}
export default followers
const Users=(props)=>{

    return(
        <div className={Style.userContainer}>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div></a>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}><p>{props.userData.userName}</p></div></a>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>
        </div>
    )
}
