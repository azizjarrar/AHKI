import React from 'react'
import Style from './searchUser.module.scss'
import {searchUserNameApi} from '../../services/user'


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
    return(
        <a href={`/profile/${props.userData._id}`}><div className={Style.userContainer}>
                <div  className={Style.imgContainer}><img src={props.userData.currentImageUrl || "/avatar.png"} /></div>
                <div  className={Style.userName}><p>{props.userData.userName}</p></div>
        </div>
        </a>
    )
}
