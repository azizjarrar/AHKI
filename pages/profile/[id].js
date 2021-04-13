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
import Gellery from '../../components/gallery/gallery'
import BiggerImagewithcomments from '../../components/biggerImagewithcomments/biggerImagewithcomments'

const profile = (props) => {
  const [user, setUser] = React.useState({ ...props.user });
  const [language , setLanguage]=React.useContext(LanguageContext)
  const [posts,setPosts]=React.useState([])
  const [openFollowersState,setOpenFollowersState]=React.useState(false)
  const [openFollowingState,setOpenFollowingState]=React.useState(false)
  const router = useRouter()
  const [MakeImageBigger,setMakeImageBigger]=React.useState(false)
  React.useEffect(()=>{
    if(props.state!=false){
      getOtherUserPosts({userid:props.user._id}).then(result=>{
        setPosts([...result.data.data])
    }).catch(error=>{
        alert(error)
    })
    }
 
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
const MakeImageBiggerfn=()=>{
  setMakeImageBigger(e=>!e)
}
  return (
    <div className={Style.container}>
            {openFollowersState&&<Followersnavbar id={props.user._id} closepopUp={openFollowers}></Followersnavbar>}
            {openFollowingState&&<Followingnavbar id={props.user._id} closepopUp={openFollowing}></Followingnavbar>}
            {MakeImageBigger&&<BiggerImagewithcomments userid={user._id} token={props.token} close={()=>MakeImageBiggerfn()} imgid={user.currentImgId} imgurl={user.currentImageUrl||"/avatar.png"}></BiggerImagewithcomments>}

      <NavBar token={props.token}></NavBar>
      <div className={Style.profile}>
        <div className={Style.ProfileImage}>
          <div className={`${Style.image} ${Style.removeAfter}`}>
            <div className={Style.underimage} onClick={()=>MakeImageBiggerfn()} >
              <img src={user.currentImageUrl || "/avatar.png"}alt={user.userName || ""}/>
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
        <div className={Style.timeLine}>
                    <div className={Style.params}>
                        <div className={Style.GelleryContainer} style={{position:"sticky",top:"60px"}}>
                            <Gellery userid={user._id} token={props.token}></Gellery>
                        </div>
                    </div>
                    <div className={Style.posts}>
                        <div className={Style.publicationContainer}>
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
  if(res.data.state==false){
    return {
      props: {
        token: context.req.cookies.token || undefined,
        state:false,
        message:"user nout found"
      },
    };
  }
  return {
    props: {
      token: context.req.cookies.token || undefined,
      user: res.data.data[0],
    },
  };
};
