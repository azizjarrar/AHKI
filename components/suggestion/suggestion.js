import React from 'react'
import Style from './suggestion.module.scss'
import {getrandomUsersApi} from '../../services/user'
import Link from 'next/link'

const suggestion = () => {
    const [randomUser,setRandomUser]=React.useState([])
    React.useEffect(()=>{
        getrandomUsersApi().then(result=>{
            setRandomUser(e=>{
                return [...e,...result.data.data]
             })
        }).catch(error=>{

        })
    },[])
    return (
        <div className={Style.container}>
            <div className={Style.ranomUserssHeader}><p>suggestion</p></div>
            <div className={Style.randomUsersContainer}>
            {randomUser.map(e=><Users key={e._id} userData={e}></Users>)}
            </div>
        </div>
    )
}

export default suggestion
const Users=(props)=>{
    return(
        <div className={Style.userContainer}>
                <Link href={`/profile/${props.userData._id}`}><div className={Style.imgContainer}><img src={props.userData.userProfileImageUrl || "/avatar.png"} /></div></Link>
                <Link href={`/profile/${props.userData._id}`}><div className={Style.userName}><p>{props.userData.userName}</p></div></Link>
        </div>
    )
}