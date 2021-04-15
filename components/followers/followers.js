import React from 'react'
import Style from './followers.module.scss'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'
import { useRouter } from 'next/router'
import {getFollowersOfUser,deleteFollowApi} from '../../services/followers'
const followers = (props) => {
    const [user,setUser]=React.useContext(UserContext)
    const [followers,setFollowers]=React.useState([])
    React.useEffect(()=>{
        getFollowersOfUser({userid:props.id},props.token).then(result=>{
            console.log(result)
            setFollowers(e=>{
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
                {followers.map(e=><Users key={e._id}  date={e.followersince} key={e._id}  userData={e.followersid}></Users>)}
                </div>
            </div>
        </div>
    )
}
export default followers
const Users=(props)=>{

    const router = useRouter()

    return(
        <div className={Style.userContainer}>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div></a>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}>
                    <p style={{width:"100%"}}>{props.userData.userName}</p>
                    <p style={{fontSize:"1.3rem",color:"gray"}}>{props.date.slice(0,10)} {props.date.slice(11,16)}</p>
                    </div></a>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow YouAreInYourProfile={router.pathname=="/profile"} theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>
        </div>
    )
}
