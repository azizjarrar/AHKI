import React from 'react'
import Style from './Email.module.scss'
import Toast from '../../Toast/Toast'
import {updateEmailSendCode,updateEmailApi} from '../../../services/user'
import UserContext from '../../../context/userContext'
import LanguageContext from '../../../context/languageContext'
import Link from 'next/link'


const Email = () => {
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
    const [user,setUser]=React.useContext(UserContext)
    const [changeEamilData,setChangeEamilData]=React.useState("")
    const [language , setLanguage]=React.useContext(LanguageContext)


    React.useEffect(()=>{
     if(toastMessage.state==true){
         setTimeout(() => {
             setToastMessage({state:false,message:""})
         }, 6000);
     }
    },[toastMessage])
    const changeHandlerNewEamilAndCode=(e)=>{
        const {name,value}=e.target
        setChangeEamilData(e=>{
            return {...e,[name]:value}
        })
    }
    const sendCode=()=>{
        updateEmailSendCode(changeEamilData.email,user.token).then(result=>{
            setToastMessage({state:true,message:"ab3eth sex"})
        })
    }
    const updateEmail=()=>{
        updateEmailApi(changeEamilData.email,changeEamilData.code,user.token).then(result=>{
            if(result.data.typeError=="incorectCode"){
                setToastMessage({state:true,message:"ab3eth sex"})
            }else if(result.data.typeError=="codeInvalid"){
                setToastMessage({state:true,message:"ab3eth sex"})
            }else if(result.data.typeError=="done"){
                setToastMessage({state:true,message:"ab3eth sex"})
            }
        }).catch(error=>{
            setToastMessage({state:true,message:error.message})
        })
    }
    
    return (
        <div className={Style.container}>
            {toastMessage.state&&<Toast text={toastMessage.message} ></Toast>}
            <div className={Style.header}><h1>{language.UpdateYourEmail}</h1></div>
            <div className={Style.centerInputs}>
                <div className={Style.warningText}><h1>{language.putyournewEmail}</h1></div>
                <div className={Style.emailContainer}><div className={Style.inputContainer}><input type="email"  onChange={(e)=>changeHandlerNewEamilAndCode(e)} name="email"/><label>{language.email}</label></div><button onClick={()=>sendCode()}>{language.send}</button></div>
                <div className={Style.warningText}><h1>{language.YouWillreciveconfermationCodeputithereAndClickUpdate}</h1></div>  
                <div className={Style.inputContainer}><input type="text"  onChange={(e)=>changeHandlerNewEamilAndCode(e)} name="code"/><label>{language.ConfermationCode}</label></div>
            </div>
            <div className={Style.btn}><button onClick={()=>updateEmail()}>{language.update}</button><Link href="/profile"><button>{language.cancel}</button></Link></div>

        </div>
    )
}

export default Email
