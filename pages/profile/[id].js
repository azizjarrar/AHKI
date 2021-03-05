import React from 'react'
import Style from '../../styles/profile.module.scss'
import Link from 'next/link'
import languageDoc from '../../components/Language/Language'
import NavBar from '../../components/navBar/NavBar'

const profile = () => {
/******************************************************************************************
*this code will change lang uage
******************************************************************************************/
    const [language, setlanguage] = React.useState({
        Following: languageDoc.Language.Profile.Following["eng"],
        Followers: languageDoc.Language.Profile.Followers["eng"],
        Posts: languageDoc.Language.Profile.Posts["eng"],
    })
    React.useEffect(() => {
        setlanguage({
            Following: languageDoc.Language.Profile.Following[localStorage.getItem("language")],
            Followers: languageDoc.Language.Profile.Followers[localStorage.getItem("language")],
            Posts: languageDoc.Language.Profile.Posts[localStorage.getItem("language")],
        })

    }, [])
    /******************************************************************************************
    this will change between your posts and your likes 
    ******************************************************************************************/
    return (
        <div className={Style.container}>
            <NavBar></NavBar>
            <div className={Style.profile}>
                <div className={Style.ProfileImage}><div className={`${Style.image} ${Style.removeAfter}`}  ></div></div>

                <div className={Style.userName}><h2>Aziz Jarrar</h2></div>
                <div className={Style.bio}><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </h2></div>
                <div className={Style.profileStatus}><h3>0 {language.Following}</h3> <h3>0 {language.Followers}</h3></div>
                <div className={Style.timelineAndparameters}>
                    <div className={Style.timeLineContainer}>
                        <div className={Style.navbar}><div className={Style.Line} style={{ left: '50%', transform: 'translateX(-50%)', width: '80%' }}></div><h2 >{language.Posts}</h2></div>
                        <div className={Style.timeLine}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
