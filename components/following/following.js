import React from 'react'
import Style from './following.module.scss'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
import {getFollowingOfUser} from '../../services/following'
const following = (props) => {
    const [Following,setFollowing]=React.useState([])
    React.useEffect(()=>{
        getFollowingOfUser({userid:props.id},props.token).then(result=>{
            setFollowing(e=>{
                return [...result.data.data]
             })
        }).catch(error=>{
            console.log(error)
        })

    },[props.id])

    return (
        <div className={Style.container}>
            <div className={Style.listContainer}>
                <div className={Style.header}><h1>Followers</h1><div onClick={()=>props.closepopUp()} className={Style.closebtn}></div></div>
                <div className={Style.list}>
                {Following.map(e=><Users key={e._id} date={e.followersince} key={e._id} userData={e.followingid}></Users>)}
            </div>
            </div>
        </div>
    )
}
export default following
const Users=(props)=>{

    return(
        <div className={Style.userContainer}>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div></a>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}>
                    <p style={{width:"100%"}}>{props.userData.userName}</p>
                    <p style={{fontSize:"1.3rem",color:"gray"}}>{props.date.slice(0,10)} {props.date.slice(11,16)}</p>
                    </div></a>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>

        </div>
    )
}
