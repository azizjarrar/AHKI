import React from 'react'
import Style from './suggestion.module.scss'
import {getrandomUsersApi} from '../../services/user'
import Link from 'next/link'

const suggestion = (props) => {
    
    const [randomUser,setRandomUser]=React.useState([])
    React.useEffect(()=>{
        if(props.token.length>2){
            getrandomUsersApi(props.token).then(result=>{
                setRandomUser(e=>{
                    return [...e,...result.data.data]
                 })
            }).catch(error=>{
    
            })
        }

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
    let colors=["#DE120D","#FA0F74","#F53F1B","#F50076","#0D36FA","#0D96FA","#3A0BDE","#0DFAE7","#0DFA78","#0DFA0D","#FAE000","#F5EE09","#6AFA03"]
    return(
        <div className={Style.userContainer}>
                <Link href={`/profile/${props.userData._id}`}><div  style={{"--c": colors[Math.floor(Math.random() * colors.length)]}} className={Style.imgContainer}><img src={props.userData.userProfileImageUrl || "/avatar.png"} /></div></Link>
                <Link href={`/profile/${props.userData._id}`}><div  className={Style.userName}><p>{props.userData.userName}</p></div></Link>
        </div>
    )
}