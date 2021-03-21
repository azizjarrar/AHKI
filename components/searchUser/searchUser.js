import React from 'react'
import Style from './searchUser.module.scss'
import {searchUserNameApi} from '../../services/user'
import Link from 'next/link'
import { useRouter } from 'next/router'

const searchUser = (props) => {
    const [listOfUsers,setListOfUsers]=React.useState([])
    React.useEffect(()=>{
        if(props.searchUserName!=undefined&& props.searchUserName.length>0){
            searchUserNameApi(props.searchUserName).then((result=>{
                if(result.data.data!=undefined){
                    setListOfUsers(e=>{
                        return [...result.data.data]
                    }) 
                }
            }))
        }
    },[props.searchUserName])
    return (
        <div className={Style.container} >
            {listOfUsers.map(e=><Users key={e._id} userData={e}></Users>)}
        </div>
    )
}

export default searchUser
const Users=(props)=>{
    const router = useRouter()

    const goToPage=()=>{
        //router.push(`/profile/${props.userData._id}`)
       // location.reload()

    }
    return(
        <div className={Style.userContainer}>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.imgContainer}><img src={props.userData.userProfileImageUrl || "/avatar.png"} /></div></a>
                <a href={`/profile/${props.userData._id}`}><div onClick={()=>goToPage()} className={Style.userName}><p>{props.userData.userName}</p></div></a>
        </div>
    )
}
