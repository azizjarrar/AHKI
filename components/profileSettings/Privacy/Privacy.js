import React from 'react'
import Style from './Privacy.module.scss'
import {updatePrivacy,getPrivacy} from '../../../services/user'
import UserContext from '../../../context/userContext'

const Privacy = () => {
    const [user,setUser]=React.useContext(UserContext)
    const [privacystate,setPrivacystate]=React.useState("private")
    React.useEffect(()=>{
        getPrivacy(user.token).then(result=>{
            console.log(result.data.data.privacy)
            setPrivacystate(result.data.data.privacy)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    const RadioBoxChangeHandler=(e)=>{
        const {value}=e.target
        updatePrivacy({privacy:value},user.token).then(result=>{
            setPrivacystate(value)

        }).catch(error=>{
            console.log(error)
        })

    }
    return (
        <div className={Style.container}>
                <div className={Style.header}><h1>Privacy</h1></div>
                <div className={Style.radioContainer}>
                    <div className={Style.text}><h1>Setting your profile Private will only late accepted users to view your profile (comment likes)</h1></div>
                    <div className={Style.radioInputContainer}><h2>private:</h2><input  onChange={(e)=>RadioBoxChangeHandler(e)} checked={privacystate=="private"} className={Style.private} name="privacy" type="radio" value="private" /></div>
                    <div className={Style.text}><h1>Setting your profile Public will allow Follower to like or comment your posts and images </h1></div>
                    <div className={Style.radioInputContainer}><h2>public:</h2><input   onChange={(e)=>RadioBoxChangeHandler(e)} checked={privacystate=="public"}  className={Style.public} name="privacy" type="radio" value="public" /></div>
                </div>
        </div>
    )
}

export default Privacy
