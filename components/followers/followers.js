import React from 'react'
import Style from './followers.module.scss'
import {getFollowersOfUser} from '../../services/user'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
const followers = (props) => {
    const [user,setUser]=React.useContext(UserContext)
    const [followers,setFollowers]=React.useState([])
    React.useEffect(()=>{
        setFollowers(e=>{
            return []
         })
    },[])
    React.useEffect(()=>{
        if(user.token!=undefined){
            getFollowersOfUser(user.token).then(result=>{
           setFollowers(e=>{
              return [...e,...result.data.data.followers]
           })
        }).catch(error=>{
            console.log(error)
        })
    }
    },[user.token])
    React.useEffect(()=>{

    },[])
    return (
        <div className={Style.container}>
            <div className={Style.listContainer}>
                <div className={Style.header}><h1>Followers</h1><div onClick={()=>props.closepopUp()} className={Style.closebtn}></div></div>
                <div className={Style.list}>
                {followers.map(e=><Users key={e._id} userData={e}></Users>)}
                </div>
            </div>
        </div>
    )
}
export default followers
const Users=(props)=>{

 
    return(
        <div className={Style.userContainer}>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.imgContainer}><img src={props.userData.userProfileImageUrl || "/avatar.png"} /></div></a>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}><p>{props.userData.userName}</p></div></a>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>
        </div>
    )
}
