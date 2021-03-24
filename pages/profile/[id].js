import React from "react";
import Style from "../../styles/profile.module.scss";
import NavBar from "../../components/navBar/NavBar";
import { GetOtherUsersData } from "../../services/user";
import NotFoundPage from "../../components/notFoundPage/notFoundPage";
import LanguageContext from '../../context/languageContext'
import FollowAndUnfollow from '../../components/followAndUnfollow/followAndUnfollow'
import { useRouter } from 'next/router'
import {getOtherUserPosts} from '../../services/postNrmlTopic'
import Publication from '../../components/publication/publication'

const profile = (props) => {
  const [user, setUser] = React.useState({ ...props.user });
  const [language , setLanguage]=React.useContext(LanguageContext)
  const [posts,setPosts]=React.useState([])

  const router = useRouter()
  React.useEffect(()=>{
    console.log(props.user._id)
    getOtherUserPosts({userid:props.user._id}).then(result=>{
      console.log(result)
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
  return (
    <div className={Style.container}>
      <NavBar token={props.token}></NavBar>
      <div className={Style.profile}>
        <div className={Style.ProfileImage}>
          <div className={`${Style.image} ${Style.removeAfter}`}>
            <div className={Style.underimage}>
              <img src={user.userProfileImageUrl || "/avatar.png"}alt={user.userName || ""}/>
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
        <div className={Style.profileStatus}><h3>{user.following} {language.Following}</h3>{" "}<h3>{user.followers} {language.Followers}</h3><FollowAndUnfollow userid={user._id} theOtherPersonId={router.query.id}></FollowAndUnfollow></div>
        </div>

        <div className={Style.timelineAndparameters}>
          <div className={Style.timeLineContainer}>
   
            <div className={Style.timeLineOfOtherUser}>
            {posts.map(e=><Publication userName={user.userName} id={e._id}  date={e.date} ownerOfPostImage={user.userProfileImageUrl} key={e._id} text={e.postText}  image={e.postImage!=undefined?e.postImage:undefined}></Publication>)}

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
