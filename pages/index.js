import Head from 'next/head'
import React from 'react'
import styles from '../styles/home.module.scss'
import HomeTodayTopics from  '../components/homeTodayTopics/homeTodayTopics'
import HomeUsersStorys from '../components/homeUsersStorys/homeUsersStorys'
import ChangeLanguage from '../components/changeLanguage/changeLanguage'
import languageDoc from '../components/Language/Language'
export default function Home() {
 const[choice_TopicToday_or_usersTopics,setChoice_TopicToday_or_usersTopics]=React.useState("todayTopics")
 const [language,setlanguage]=React.useState({
  todayTopic:languageDoc.Language.navbarHome.todayTopic["eng"],
  FriendsPosts:languageDoc.Language.navbarHome.FriendsPosts["eng"],
 })
 React.useEffect(() => {
  setlanguage({
    todayTopic:languageDoc.Language.navbarHome.todayTopic[localStorage.getItem("language")],
    FriendsPosts:languageDoc.Language.navbarHome.FriendsPosts[localStorage.getItem("language")],
   })

 }, [])
 const change=(e)=>{
  setChoice_TopicToday_or_usersTopics(e)
 }
 
  return (
    <div className={styles.container}>
      <Head>
        <title>AHKI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="social media websites where people can talk about certain subjects that happen in daily life"></meta>
        <meta name="keywords" content="speak, talk, subjict"></meta>
      </Head>
      <div className={styles.home}>
        <ChangeLanguage></ChangeLanguage>
      <div className={styles.navbar_Choice_TopicToday_or_usersTopics}><div className={styles.Line} style={choice_TopicToday_or_usersTopics=="todayTopics"?{left:'0'}:{left:"50%"}}></div><h2 onClick={()=>change("todayTopics")}>{language.todayTopic}</h2><h2 onClick={()=>change("otherPeopleStory")}>{language.FriendsPosts}</h2></div>
        {choice_TopicToday_or_usersTopics=="todayTopics"&&<HomeTodayTopics></HomeTodayTopics>}
        {choice_TopicToday_or_usersTopics=="otherPeopleStory"&&<HomeUsersStorys></HomeUsersStorys>}
      </div>
    </div>
  )
}
