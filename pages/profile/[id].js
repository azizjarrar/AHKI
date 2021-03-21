import React from "react";
import Style from "../../styles/profile.module.scss";
import NavBar from "../../components/navBar/NavBar";
import { GetOtherUsersData } from "../../services/user";
import NotFoundPage from "../../components/notFoundPage/notFoundPage";
import LanguageContext from '../../context/languageContext'
import FollowAndUnfollow from '../../components/followAndUnfollow/followAndUnfollow'
import { useRouter } from 'next/router'

const profile = (props) => {
  const [user, setUser] = React.useState({ ...props.user });
  const [language , setLanguage]=React.useContext(LanguageContext)
  const router = useRouter()

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
        <div className={Style.timelineAndparameters}>
          <div className={Style.timeLineContainer}>
   
            <div className={Style.timeLine}></div>
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
