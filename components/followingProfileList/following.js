import React from 'react'
import Style from './following.module.scss'
import {getFollowersApi} from '../../services/user'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
import Link from 'next/link'

const following = () => {
    const [user,setUser]=React.useContext(UserContext)
    const [followers,setFollowers]=React.useState([])
    React.useEffect(()=>{
        setFollowers(e=>{
            return []
         })
    },[])
    React.useEffect(()=>{
        if(user.token!=undefined){
        getFollowersApi(user.token).then(result=>{
           setFollowers(e=>{
              return [...e,...result.data.data.followers]
           })
        }).catch(error=>{})
    }
    },[user.token])

    return (
        <div className={Style.container}>
            <div className={Style.followersHeader}><p>Followers</p></div>
            <div className={Style.followerContainer}>
            {followers.map(e=><Users key={e._id} userData={e}></Users>)}
            </div>
        </div>
    )
}

export default following

const Users=(props)=>{
    return(
        <div className={Style.userContainer}>
                <Link href={`/profile/${props.userData._id}`}><div className={Style.imgContainer}><img src={props.userData.userProfileImageUrl || "/avatar.png"} /></div></Link>
                <Link href={`/profile/${props.userData._id}`}><div className={Style.userName}><p>{props.userData.userName}</p></div></Link>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>
        </div>
    )
}