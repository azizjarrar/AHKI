import Head from 'next/head'
import React from 'react'
import styles from '../styles/home.module.scss'
import HomeTodayTopics from '../components/homeTodayTopics/homeTodayTopics'
import HomeUsersStorys from '../components/homeUsersStorys/homeUsersStorys'
import ChangeLanguage from '../components/changeLanguage/changeLanguage'
import NavBar from '../components/navBar/NavBar'
import LanguageContext from '../context/languageContext'

function Home(props) {
  const [language, setLanguage] = React.useContext(LanguageContext)
  const [choice_TopicToday_or_usersTopics, setChoice_TopicToday_or_usersTopics] = React.useState('todayTopics') //user topics is friends publication in the page i will change it later

  /******************************************************************************************
  *this code will change between 2 page today topic
  *or friends publication
  if(todayTopics)then
  HomeTodayTopics
  else
  HomeUsersStorys
  ******************************************************************************************/
  const change = (e) => {
    setChoice_TopicToday_or_usersTopics(e)
  }

  return (
    <div className={styles.container}>
      <NavBar token={props.token}></NavBar>
      <Head>
        <title>AHKI</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='social media websites where people can talk about certain subjects that happen in daily life'
        ></meta>
        <meta name='keywords' content='speak, talk, subjict'></meta>
      </Head>
      <div className={styles.home}>
        <ChangeLanguage></ChangeLanguage>
        <div className={styles.navbar_Choice_TopicToday_or_usersTopics}>
        
          
          {props.token==false || props.token==undefined?
          <div className={styles.Line} style={ { width:"100%" }}></div>
          :<div className={styles.Line} style={choice_TopicToday_or_usersTopics == 'todayTopics' ? { left: '0' } : { left: '50%' }}></div>
          }

          
       
          <h2 onClick={() => change('todayTopics')}>{language.todayTopic}</h2>
          {props.token!=false && props.token!=undefined&&<h2 onClick={() => change('otherPeopleStory')}>{language.FriendsPosts}</h2>}
        </div>
        {choice_TopicToday_or_usersTopics == 'todayTopics' && (<HomeTodayTopics></HomeTodayTopics>)}
        {choice_TopicToday_or_usersTopics == 'otherPeopleStory' && (<HomeUsersStorys></HomeUsersStorys>)}
        

      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps({ req, res }) {
  return req.cookies.token ? { props: { token: req.cookies.token } } : { props: { token: false } }
}