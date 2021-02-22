import Head from 'next/head'
import styles from '../styles/home.module.scss'
import HomeTodayTopics from  '../components/homeTodayTopics/homeTodayTopics'
import HomeUsersStorys from '../components/homeUsersStorys/homeUsersStorys'
import React from 'react'
export default function Home() {
 const[choice_TopicToday_or_usersTopics,setChoice_TopicToday_or_usersTopics]=React.useState("todayTopics")
 const change=(e)=>{
   console.log(choice_TopicToday_or_usersTopics)
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
      <div className={styles.navbar_Choice_TopicToday_or_usersTopics}><div className={styles.Line} style={choice_TopicToday_or_usersTopics=="todayTopics"?{left:'0'}:{left:"50%"}}></div><h2 onClick={()=>change("todayTopics")}>today Topic</h2><h2 onClick={()=>change("otherPeopleStory")}>other people story</h2></div>

        {choice_TopicToday_or_usersTopics=="todayTopics"&&<HomeTodayTopics></HomeTodayTopics>}
        {choice_TopicToday_or_usersTopics=="otherPeopleStory"&&<HomeUsersStorys></HomeUsersStorys>}
      </div>
    </div>
  )
}
