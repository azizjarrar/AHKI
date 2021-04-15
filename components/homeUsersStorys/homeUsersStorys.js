import React from 'react'
import Styles from './homeUsersStorys.module.scss'
import PostUsersStorys from '../postUsersStorys/postUsersStorys'
import {getFriendsPosts} from '../../services/post'
import userContext from '../../context/userContext'
import Publication from '../publication/publication'
const HomeUsersStorys = () => {
    const [user,setUser]=React.useContext(userContext)
    const [posts,setPosts]=React.useState([])

    React.useEffect(()=>{
        if(user.token!=undefined){
            console.log(user)
            getFriendsPosts({},user.token).then(result=>{
                console.log(result)
                setPosts([...result.data.data])

            }).catch(error=>{
                console.log(error)
            })
        }

    },[user.token])
    return (
        <div className={Styles.usersTopics}>
            <PostUsersStorys></PostUsersStorys>
            <div className={Styles.posts}>
                <div className={Styles.publicationContainer}>
                {posts.map(e=><Publication userName={e.OwnerOfPost.userName} id={e._id}  date={e.date} ownerOfPostImage={e.OwnerOfPost.currentImageUrl} key={e._id} text={e.postText}  image={e.postImage!=undefined?e.postImage:undefined}></Publication>)}
                </div>
            </div>   
        </div>
    )
}

export default HomeUsersStorys
