import React from 'react'
import Style from './followAndUnfollow.module.scss'
import {unfollowUserApi,followUserApi,checkIffollowApi,removeFollowPending} from '../../services/following'
import {deleteFollowApi} from '../../services/followers'
import UserContext from '../../context/userContext'
import socketContext from '../../context/socketContext'
const followAndUnfollow = (props) => {
    const [user, setUser]= React.useContext(UserContext)
    const [followOrNot,setFollowOrNot]=React.useState(false)
    const [ifHeDeletedUser,setIfHeDeletedUser]=React.useState(false)
    const [Loading,setLoading]=React.useState(false)
    const refDelte=React.useRef(null)
    const [socket,setSocket]=React.useContext(socketContext)


    React.useEffect(()=>{
        setLoading(true)
        if(user.token!=undefined && props.theOtherPersonId!=undefined){
            checkIffollowApi(props.theOtherPersonId,user.token).then(result=>{
                setFollowOrNot(result.data)
            }).catch(error=>{})
        }
    },[user.token])
    React.useEffect(()=>{
        setLoading(false)
    },[followOrNot])
    const followUser=(theOtherPersonId)=>{
        console.log("followit")
        followUserApi(theOtherPersonId,user.token).then(result=>{
            //setFollowOrNot(e=>!e)
            socket.emit("sendNotficicationFromUserToUser",{otherUserId:theOtherPersonId})

            setFollowOrNot(e=>{
                return {...e,"state":result.data.state}
            })
        }).catch(error=>{})
    }
    
    const removeFollowPendingfn=(theOtherPersonId)=>{
        setLoading(true)
        removeFollowPending(theOtherPersonId,user.token).then(result=>{
            setFollowOrNot(e=>{
                return {...e,"state":result.data.state}
            })
        }).catch(error=>{})
    }
    const unfollow=(followingid)=>{
        unfollowUserApi(followingid,user.token).then(result=>{
            setFollowOrNot(e=>{
                return {...e,"state":result.data.state}
            })
        }).catch(error=>console.log(error))
    }
    const deleteFollow=(theOtherPersonId)=>{
        deleteFollowApi(theOtherPersonId,user.token).then(result=>{
            refDelte.current.innerHTML="done"
        }).catch(error=>{
            console.log(error)
        })
    }
    if(followOrNot==undefined){
        return (<div className={Style.loadingAnimation}>
        {Loading&&<div className={Style.ldsring}><div></div><div></div><div></div><div></div></div>}
        </div>)
    }
    else if (props.YouAreInYourProfile!=undefined && props.YouAreInYourProfile==true && ifHeDeletedUser==false){
        return(<div onClick={()=>deleteFollow({theOtherPersonId:props.theOtherPersonId})} className={`${Style.followAndUnfollow} ${Style.unfollow}`}>
            <p ref={refDelte}>delete</p>
        </div>)
    
    }else if(followOrNot.state==1){
        return (<div onClick={()=>removeFollowPendingfn(props.theOtherPersonId)} className={`${Style.followAndUnfollow} ${Style.unfollow}`}>
            <p>pending</p>
        </div>)
    }else if(followOrNot.state==2){
        return (
        <div onClick={()=>unfollow(props.theOtherPersonId)} className={`${Style.followAndUnfollow} ${Style.unfollow}`}>
            <p >unfollow</p>
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
