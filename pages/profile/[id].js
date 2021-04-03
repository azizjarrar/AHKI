import React from "react";
import Style from "../../styles/profile.module.scss";
import NavBar from "../../components/navBar/NavBar";
import { GetOtherUsersData } from "../../services/user";
import NotFoundPage from "../../components/notFoundPage/notFoundPage";
import LanguageContext from '../../context/languageContext'
import FollowAndUnfollow from '../../components/followAndUnfollow/followAndUnfollow'
import { useRouter } from 'next/router'
import {getOtherUserPosts} from '../../services/post'
import Publication from '../../components/publication/publication'
import Followersnavbar from '../../components/followers/followers'
import Followingnavbar from '../../components/following/following'
const profile = (props) => {
  const [user, setUser] = React.useState({ ...props.user });
  const [language , setLanguage]=React.useContext(LanguageContext)
  const [posts,setPosts]=React.useState([])
  const [openFollowersState,setOpenFollowersState]=React.useState(false)
  const [openFollowingState,setOpenFollowingState]=React.useState(false)
  const router = useRouter()
  React.useEffect(()=>{
    getOtherUserPosts({userid:props.user._id}).then(result=>{
      setPosts([...result.data.data])
  }).catch(error=>{
      alert(error)
  })
  },[])
  /******************************************************************************************
    this will change between your posts and your likes 
    ******************************************************************************************/
  if (props.state == false) {
    return (
      <div className={Style.container}>
        <NavBar token={props.token}></NavBar>
        <NotFoundPage></NotFoundPage>
      </div>
    );
  }
  const openFollowers=()=>{
    setOpenFollowersState(e=>!e)
}
const openFollowing=()=>{
    setOpenFollowingState(e=>!e)
}
  return (
    <div className={Style.container}>
            {openFollowersState&&<Followersnavbar id={props.user._id} closepopUp={openFollowers}></Followersnavbar>}
            {openFollowingState&&<Followingnavbar id={props.user._id} closepopUp={openFollowing}></Followingnavbar>}
      <NavBar token={props.token}></NavBar>
      <div className={Style.profile}>
        <div className={Style.ProfileImage}>
          <div className={`${Style.image} ${Style.removeAfter}`}>
            <div className={Style.underimage}>
              <img src={user.currentImageUrl || "/avatar.png"}alt={user.userName || ""}/>
            </div>
            <div className={Style.camera}>
              <input onChange={(e) => changeFile(e)} type="file" />
            </div>
          </div>
        </div>

        <div className={Style.userName}>
          <h2>{user.userName || user.firstName || "No Name"}</h2>
        </div>
        <div className={Style.bio}>
          <h2>{user.biography}</h2>
        </div>
        <div className={Style.profileStatus}>
          <h3 onClick={()=>openFollowing()}>{user.following} {language.Following}</h3> 
          <h3 onClick={()=>openFollowers()}>{user.followers} {language.Followers}</h3>
          <FollowAndUnfollow userid={user._id} theOtherPersonId={router.query.id}></FollowAndUnfollow>

          </div>

   
        </div>

        <div className={Style.timelineAndparameters}>
          <div className={Style.timeLineContainer}>
   
            <div className={Style.timeLineOfOtherUser}>
            {posts.map(e=><Publication userName={user.userName} commentsNumber={e.comments} likesNumber={e.likes} id={e._id}  date={e.date} ownerOfPostImage={user.currentImageUrl} key={e._id} text={e.postText}  image={e.postImage!=undefined?e.postImage:undefined}></Publication>)}

            </div>
          </div>
        </div>
    </div>
  );
};

export default profile;
export const getServerSideProps = async (context) => {
  const res = await GetOtherUsersData(context.params.id);
  if(context.req.cookies.token==undefined){
    return {
        redirect: { destination: '/', permanent: false, }
    };
  }
  if (res.data.data == undefined) {
    return {
        redirect: { destination: '/', permanent: false, }
    };
  }
  return {
    props: {
      token: context.req.cookies.token || undefined,
      user: res.data.data[0],
    },
  };
};
