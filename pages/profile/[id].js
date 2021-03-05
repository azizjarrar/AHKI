import React from "react";
import Style from "../../styles/profile.module.scss";
import languageDoc from "../../components/Language/Language";
import NavBar from "../../components/navBar/NavBar";
import { GetOtherUsersData } from "../../services/user";
import NotFoundPage from "../../components/notFoundPage/notFoundPage";
const profile = (props) => {
  const [user, setUser] = React.useState({ ...props.user });

  /******************************************************************************************
   *this code will change lang uage
   ******************************************************************************************/
  const [language, setlanguage] = React.useState({
    Following: languageDoc.Language.Profile.Following["eng"],
    Followers: languageDoc.Language.Profile.Followers["eng"],
    Posts: languageDoc.Language.Profile.Posts["eng"],
  });
  React.useEffect(() => {
    setlanguage({
      Following:
        languageDoc.Language.Profile.Following[
          localStorage.getItem("language")
        ],
      Followers:
        languageDoc.Language.Profile.Followers[
          localStorage.getItem("language")
        ],
      Posts:
        languageDoc.Language.Profile.Posts[localStorage.getItem("language")],
    });
  }, []);
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
              <img
                src={user.userProfileImageUrl || "/avatar.png"}
                alt={user.userName || ""}
              />
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
          <h3>
            {user.following} {language.Following}
          </h3>{" "}
          <h3>
            {user.Followers} {language.Followers}
          </h3>
        </div>
        <div className={Style.timelineAndparameters}>
          <div className={Style.timeLineContainer}>
            <div className={Style.navbar}>
              <div
                className={Style.Line}
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                }}
              ></div>
              <h2>{language.Posts}</h2>
            </div>
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
  console.log(res.data.data);
  if (res.data.data == undefined) {
    return {
      props: {
        token: context.req.cookies.token || undefined,
        state: false,
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
