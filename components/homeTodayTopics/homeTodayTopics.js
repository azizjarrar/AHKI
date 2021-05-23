import React from 'react'
import Styles from './homeTodayTopics.module.scss'
import PostTodayTopic from '../postTodayTopic/postTodayTopic'
import userContext from '../../context/userContext'
import {getTodayTopicPost} from '../../services/post'
import Publication from '../publication/publication'

const homeTodayTopics = () => {
    const [user,setUser]=React.useContext(userContext)
    const [posts,setPosts]=React.useState([])

    React.useEffect(()=>{
        if(user.token!=undefined){
            getTodayTopicPost({},user.token).then(result=>{

                if(result!=undefined){
                    setPosts([...result.data.data])

                }
            }).catch(error=>{
                console.log(error)
            })
        }

    },[user.token])
    const refrechDataFn=()=>{
        getTodayTopicPost({},user.token).then(result=>{
            setPosts([...result.data.data])
        }).catch(error=>{
            alert(error)
        })
    }
    return (

            <div className={Styles.todayTopics}>

                <div className={Styles.posts}>
                {<PostTodayTopic logedOrNot={user.token!=false&&user.token!=undefined} refrechData={refrechDataFn}></PostTodayTopic>}
                    <div className={Styles.publicationContainer}>
                        
                    {posts.map(e=><Publication  allowAnonymeComments={e.allowAnonymeComments}  userName={e.OwnerOfPost.userName} id={e._id}  date={e.date} ownerOfPostImage={e.OwnerOfPost.currentImageUrl||"anonym"} key={e._id} text={e.postText} video={e.postVideo!=undefined?e.postVideo:undefined} image={e.postImage!=undefined?e.postImage:undefined}></Publication>)}
 
                    </div>
                </div>
            </div>
    )
}

export default homeTodayTopics

