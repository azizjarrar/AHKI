import React from 'react'
import Style from './following.module.scss'
import UserContext from '../../context/userContext'
import FollowAndUnfollow from '../followAndUnfollow/followAndUnfollow'

const following = (props) => {
    const [user,setUser]=React.useContext(UserContext)
    const [Following,setFollowing]=React.useState([])
    React.useEffect(()=>{
        setFollowing(e=>{
            return []
         })
    },[])

    return (
        <div className={Style.container}>
            <div className={Style.listContainer}>
                <div className={Style.header}><h1>Followers</h1><div onClick={()=>props.closepopUp()} className={Style.closebtn}></div></div>
                <div className={Style.list}>
                {Following.map(e=><Users key={e._id} userData={e}></Users>)}
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
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}><p>{props.userData.userName}</p></div></a>
                <div className={Style.FollowAndUnfollowContainer}><FollowAndUnfollow theOtherPersonId={props.userData._id}></FollowAndUnfollow></div>

        </div>
    )
}
