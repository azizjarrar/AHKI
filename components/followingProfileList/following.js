import React from 'react'
import Style from './following.module.scss'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
import Link from 'next/link'
// hedi mta3 profilek enti
const following = () => {
    const [user,setUser]=React.useContext(UserContext)
    const [followers,setFollowers]=React.useState([])


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
                <Link href={`/profile/${props.userData._id}`}><div className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div></Link>
                <Link href={`/profile/${props.userData._id}`}><div className={Style.userName}><p>{props.userData.userName}</p></div></Link>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>
        </div>
    )
}