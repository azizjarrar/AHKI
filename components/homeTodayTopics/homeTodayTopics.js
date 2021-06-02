import React from 'react'
import Styles from './homeTodayTopics.module.scss'
import PostTodayTopic from '../postTodayTopic/postTodayTopic'
import userContext from '../../context/userContext'
import {getTodayTopicPost,getSelectedTopicPosts,getTopUserPostsLikes} from '../../services/post'
import Publication from '../publication/publication'
import Select from 'react-select'
import {getallTopics} from '../../services/todayTopic'
const homeTodayTopics = () => {
    const [user,setUser]=React.useContext(userContext)
    const [posts,setPosts]=React.useState([])
    const [topUsers,setTopUsers]=React.useState([])
    const [options,setOptions]=React.useState([])
    const [idTopic,setIdTopic]=React.useState(undefined)
    const [heightAndWidthOfWindow, setHeightAndWidthOfWindow] = React.useState({height:500,width:550})//responsive handler
    const [openRankingState,setOpenRanking]=React.useState(false)
    React.useEffect(()=>{

        setHeightAndWidthOfWindow({ height: window.innerHeight, width: window.innerWidth }) 
    },[])
    React.useEffect(()=>{
        if(user.token!=undefined){
            getTodayTopicPost({},user.token).then(result=>{

                if(result!=undefined){
                    setPosts([...result.data.data])

                }
            }).catch(error=>{
                console.log(error)
            })
            getTopUserPostsLikes({idTopic:undefined}).then(result=>{

                if(result!=undefined){
                    setTopUsers([...result.data.data])

                }
            }).catch(error=>{
                console.log(error.message)
            })
            getallTopics().then(result=>{
                if(result!=undefined){
                    let newArrayOfTopics=[]
                    for(let i=0;i<result.data.data.length;i++){
                        newArrayOfTopics.push({ "value": result.data.data[i]._id, "label":result.data.data[i].topic })
                    }
                    setOptions([...newArrayOfTopics])

                }
            }).catch(error=>{
                console.log(error)
            })
        }

    },[user.token])
    const refrechDataFn=()=>{
        if(idTopic!=undefined){
            getSelectedTopicPosts({idTopic:idTopic},user.token).then(result=>{

                if(result!=undefined){
                    setPosts([...result.data.data])
    
                }
            }).catch(error=>{
                console.log(error)
            })
        }else{
            getTodayTopicPost({},user.token).then(result=>{
                setPosts([...result.data.data])
            }).catch(error=>{
                alert(error)
            })
        }

    }
    const getSelectdIdOfTopic=(id)=>{
        getSelectedTopicPosts({idTopic:id.value},user.token).then(result=>{

            if(result!=undefined){
                setPosts([...result.data.data])

            }
        }).catch(error=>{
            console.log(error)
        })
        getTopUserPostsLikes({idTopic:id.value}).then(result=>{

            if(result!=undefined){
                setTopUsers([...result.data.data])

            }
        }).catch(error=>{
            console.log(error)
        })
        setIdTopic(id.value)
      
    }
    const openRanking=()=>{
        setOpenRanking(e=>!e)
    }
    return (

            <div className={Styles.todayTopics}>
                  

                {heightAndWidthOfWindow.width > heightAndWidthOfWindow.height?<div>
                    <div className={Styles.topUsers}>
                    <div className={Styles.changeTopic}>
                    <div className={Styles.header}>
                        <div className={Styles.name}>
                            <h2>Check old Topics</h2>
                        </div>
                    </div>
                    <div className={Styles.selectOption}>
                    <Select onChange={getSelectdIdOfTopic} instanceId={"idunique"} id={"gzegzegze"} options={options} />
                    </div>
                        
                   </div>
                    {topUsers.map((e,index)=> <TopUsers  index={index} postdata={e} key={e._id}></TopUsers>)}
                    
                </div>
                    
                    </div>:<div>
                            <div className={Styles.openranking} onClick={()=>openRanking()}><img src={"/ranking/ranking.png"}/></div>
                            {openRankingState&&<div className={Styles.topUsers}>
                                <div className={Styles.changeTopic}>
                                    <div className={Styles.header}>
                                        <div className={Styles.name}>
                                            <h2>Check old Topics</h2>
                                        </div>
                                    </div>
                                    <div className={Styles.selectOption}>
                                    <Select onChange={getSelectdIdOfTopic} instanceId={"idunique"} id={"gzegzegze"} options={options} />
                                    </div>
                                </div>
                                {topUsers.map((e,index)=> <TopUsers  index={index} postdata={e} key={e._id}></TopUsers>)}
                            </div>}
                        </div>}

                <div className={Styles.posts}>
                {<PostTodayTopic idTopic={idTopic}  logedOrNot={user.token!=false&&user.token!=undefined} refrechData={refrechDataFn}></PostTodayTopic>}
                    <div className={Styles.publicationContainer}>
                        
                    {posts.map((e)=><Publication  allowAnonymeComments={e.allowAnonymeComments}  userName={e.OwnerOfPost.userName} id={e._id}  date={e.date} ownerOfPostImage={e.OwnerOfPost.currentImageUrl||"anonym"} key={e._id} text={e.postText} video={e.postVideo!=undefined?e.postVideo:undefined} image={e.postImage!=undefined?e.postImage:undefined}></Publication>)}
 
                    </div>
                </div>
            </div>
    )
}

export default homeTodayTopics


const TopUsers=(props)=>{
    return(<div className={Styles.TopUsersStyle}>
        <div className={Styles.header}>

            <div className={Styles.userImage}>
                <img src={props.postdata.OwnerOfPost.currentImageUrl=="anonym"?"/anonymous.png":props.postdata.OwnerOfPost.currentImageUrl}/>
            </div>
            <div className={Styles.name}>
                <h2>{props.postdata.OwnerOfPost.userName}</h2>
            </div>
            <div className={Styles.ranking}>
                {props.index==0&&<div className={Styles.randkingImageContainer}><img src="/ranking/first.png"/></div>}
                {props.index==1&&<div className={Styles.randkingImageContainer}><img src="/ranking/second.png"/></div>}
                {props.index==2&&<div className={Styles.randkingImageContainer}><img src="/ranking/third.png"/></div>}
            </div>
            <div className={Styles.numberOfLikes}><h2>{(props.index!=1&&props.index!=2&&props.index!=0) &&`top ${props.index+1} `}With {props.postdata.Likes??0} Likes</h2></div>
        </div>
        <div className={Styles.postText}><p>{props.postdata.postText}</p></div>
    </div>)
}
