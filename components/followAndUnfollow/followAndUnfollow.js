import React from 'react'
import Style from './followAndUnfollow.module.scss'
import {unfollowUserApi,followUserApi,checkIffollowApi,deleteFollowApi} from '../../services/user'
import UserContext from '../../context/userContext'
const followAndUnfollow = (props) => {
    const [user, setUser]= React.useContext(UserContext)
    const [followOrNot,setFollowOrNot]=React.useState(false)
    const [ifHeDeletedUser,setIfHeDeletedUser]=React.useState(false)
    React.useEffect(()=>{
        if(user.token!=undefined && props.theOtherPersonId!=undefined){
            checkIffollowApi(props.theOtherPersonId,user.token).then(result=>{
                setFollowOrNot(result.data.following)
            }).catch(error=>{})
        }
    },[user.token])

    const followUser=(theOtherPersonId)=>{
        followUserApi(theOtherPersonId,user.token).then(result=>{
            setFollowOrNot(e=>!e)
        }).catch(error=>{})
    }
    const unfollowUser=(theOtherPersonId)=>{
        unfollowUserApi(theOtherPersonId,user.token).then(result=>{
            setFollowOrNot(e=>!e)

        }).catch(error=>{})
    }
    const deleteFollow=(theOtherPersonId)=>{
        deleteFollowApi(theOtherPersonId,user.token).then(result=>{
            setIfHeDeletedUser(true)

        }).catch(error=>{})
        
    }
    if (props.YouAreInYourProfile!=undefined && props.YouAreInYourProfile==true && ifHeDeletedUser==false){
        return(<div onClick={()=>deleteFollow({theOtherPersonId:props.theOtherPersonId})} className={`${Style.followAndUnfollow} ${Style.unfollow}`}>
            <p>delete</p>
        </div>)
    }else if(followOrNot){
        return (
        <div onClick={()=>unfollowUser(props.theOtherPersonId)} className={`${Style.followAndUnfollow} ${Style.unfollow}`}>
            <p>unfollow</p>
        </div>

        )
    }
    else{
        return (
        <div onClick={()=>followUser(props.theOtherPersonId)} className={`${Style.followAndUnfollow} ${Style.follow}`}>
            <p>Follow</p>
        </div>
        )
    }

}

export default followAndUnfollow
