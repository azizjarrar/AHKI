import React from 'react'
import Style from './notification.module.scss'
import {getnotifications} from '../../services/notification'
import {deniedfollow,acceptfollow} from '../../services/following'
import UserContext from '../../context/userContext'

const notification = (props) => {
    const [notifications,setnotifications]=React.useState([])
    const [Loading,setLoading]=React.useState(false)

    React.useEffect(()=>{
        getnotifications({},props.token).then(result=>{
            console.log(result.data.data)
            setnotifications(result.data.data)
        }).catch(error=>{
        })
    },[])
    const deniedfollowfn=(theOtherPersonId,idComponent)=>{
        setLoading(true)
        deniedfollow(theOtherPersonId,idComponent,props.token).then(result=>{
            setLoading(false)
            setnotifications(e=>{return [...e.filter(e=> e._id!=idComponent)]})

        }).catch(error=>{

        })
    }
    const acceptfollowfn=(theOtherPersonId,idComponent)=>{
        setLoading(true)
        acceptfollow(theOtherPersonId,idComponent,props.token).then(result=>{
            setLoading(false)
            setnotifications(e=>{return [...e.filter(e=> e._id!=idComponent)]})
        }).catch(error=>{

        })
    }
    return (
        <div className={Style.container}>
            <div className={Style.header}><h1>Notifcation</h1></div>
            {notifications.map(notif=>{
                if(notif.type=="follow"){
                    return (<div className={Style.notif}>
                        <div className={Style.user}>
                            <div className={Style.userImageContainer}>
                                <img src={notif.from.currentImageUrl} />
                            </div>
                        </div>
                        <div className={Style.text}>
                            <h2>{notif.from.userName}</h2>
                            <p>want to follow you</p>
                            <div className={Style.btns}>
                                <button onClick={()=>deniedfollowfn(notif.from._id,notif._id)}>{Loading==false?<p>reject</p>:<div className={Style.ldsring}><div></div><div></div><div></div><div></div></div>}</button>
                                <button onClick={()=>acceptfollowfn(notif.from._id,notif._id)}>{Loading==false?<p>aprove</p>:<div className={Style.ldsring}><div></div><div></div><div></div><div></div></div>}</button>
                            </div>
                        </div>
                    </div>)
                }else if(notif.type=="follow directly"){
                    return (<div className={Style.notif}>
                        <div className={Style.user}>
                            <div className={Style.userImageContainer}>
                                <img src={notif.from.currentImageUrl} />
                            </div>
                        </div>
                        <div className={Style.text}>
                            <h2>{notif.from.userName}</h2>
                            <p> followd you</p>
                        </div>
                    </div>)
                }
            })}
        </div>
    )
}

export default notification
