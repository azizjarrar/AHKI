import React from 'react'
import Style from '../../styles/profile.module.scss'
import Link from 'next/link'
import NavBar from '../../components/navBar/NavBar'
import UserContext from '../../context/userContext'
import LanguageContext from '../../context/languageContext'
import {ChangeProfileImage} from '../../services/user'
import PostUsersStorys from '../../components/postUsersStorys/postUsersStorys'
import Publication from '../../components/publication/publication'
import Following from '../../components/followingProfileList/following'
import Suggestion from '../../components/suggestion/suggestion'
import Followersnavbar from '../../components/followers/followers'
import Followingnavbar from '../../components/following/following'
const Profile = (props) => {
    const [yourFeeds, setYourFeeds] = React.useState("Your Posts")
    const [user,setUser]= React.useContext(UserContext)
    const [language , setLanguage]=React.useContext(LanguageContext)
    const [openFollowersState,setOpenFollowersState]=React.useState(false)
    const [openFollowingState,setOpenFollowingState]=React.useState(false)
    /******************************************************************************************
    this will change between your posts and your likes 
    ******************************************************************************************/
    const change = (e) => {
        setYourFeeds(e)
    }
    const changeFile=(e)=>{
        var formData = new FormData()
        formData.append('file', e.target.files[0]);
        ChangeProfileImage(formData,user.token).then((data)=>{
            setUser(e=>{
                return{
                    ...e,
                    userProfileImageUrl:data.data.Picurl
                }
            })
        })

    }
    const openFollowers=()=>{
        setOpenFollowersState(e=>!e)
    }
    const openFollowing=()=>{
        setOpenFollowingState(e=>!e)
    }
    return (
        <div className={Style.container}>
            <NavBar token={props.token}></NavBar>
            {openFollowersState&&<Followersnavbar closepopUp={openFollowers}></Followersnavbar>}
            {openFollowingState&&<Followingnavbar closepopUp={openFollowing}></Followingnavbar>}
            <div className={Style.profile}>
                <div className={Style.ProfileImage}><div className={Style.image} ><div className={Style.underimage}><img src={user.userProfileImageUrl||"/avatar.png"} alt={user.userName || ""}/></div><div className={Style.camera}><input onChange={e => changeFile(e)} type="file" /><svg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" /></svg></div></div></div>
                <div className={Style.userName}><h2>{user.userName||user.firstName||"No Name"}</h2></div>
                <div className={Style.bio}><h2>{user.biography} </h2></div>
                <div className={Style.profileStatus}><h3 onClick={()=>openFollowing()}>{user.following} {language.Following}</h3> <h3 onClick={()=>openFollowers()}>{user.followers} {language.Followers}</h3><Link href="/settings"><div className={Style.UpdateProfile}><h3>{language.UpdateProfile}</h3><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-cog" role="img" viewBox="0 0 640 512"><path fill="#1876f3" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" /></svg></div></Link></div>
                <div className={Style.timelineAndparameters}>
                    <div className={Style.timeLineContainer}>
                        <div className={Style.navbar}><div className={Style.Line} style={yourFeeds == "Your Posts" ? { left: '0' } : { left: "50%" }}></div><h2 onClick={() => change("Your Posts")}>{language.YourPosts}</h2><h2 onClick={() => change("Likes")}>{language.Likes}</h2></div>
                    </div>
                </div>
            </div>
            <div className={Style.timeLine}>
                <div className={Style.params}>
                    <div className={Style.suggestionContainer}>
                        <Suggestion></Suggestion>
                    </div>
                    <div className={Style.followingContainer}>
                        <Following></Following>
                    </div>
   
                </div>
                <div className={Style.posts}>
                <PostUsersStorys></PostUsersStorys>
                <div className={Style.publicationContainer}>
                    <Publication index={"1"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five"} image={"/me.jpg"}></Publication>
                    <Publication index={"2"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  gze  innnnnnnaaa aaaaaaaaaaaaaaagezgzgze zzzzzzzzzzzzzzeggzg zn"} image={false}></Publication>
                    <Publication index={"3"} text={"gzegzegzeg"} image={"hola.jpg"}></Publication>
                    <Publication index={"4"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  gze  innnnnnnaaa aaaaaaaaaaaaaaagezgzgze zzzzzzzzzzzzzzeggzg zn"} image={false}></Publication>
                    <Publication index={"5"} text={"gzegzegzeg"} image={"hola.jpg"}></Publication>
                    <Publication index={"6"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  gze  innnnnnnaaa aaaaaaaaaaaaaaagezgzgze zzzzzzzzzzzzzzeggzg zn"} image={false}></Publication>
                </div>
                </div>
                         
            </div>
        </div>
    )
}

export default Profile
export async function getServerSideProps({req,res}) {
    return req.cookies.token ?{props: {token:req.cookies.token}}:{redirect: { destination: '/', permanent: false, }}
}