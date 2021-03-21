import React from 'react'
import Style from './Password.module.scss'
import {changePassword} from '../../../services/user'
import UserContext from '../../../context/userContext'
import ApiIsLoadingContext from '../../../context/apiIsLoadingContext'
import Toast from '../../Toast/Toast'
import LanguageContext from '../../../context/languageContext'
import Link from 'next/link'





const Password = () => {
    const [password,setPassword]=React.useState("")
    const [user,setUser]=React.useContext(UserContext)
    const [isLoading, setIsLoading] = React.useContext(ApiIsLoadingContext)
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
    const [language , setLanguage]=React.useContext(LanguageContext)


    const changeHandler=(e)=>{
        const {name,value}=e.target;
        setPassword(e=>{
            return {...e,[name]:value}
        })
    }
    const UpdatePassword=()=>{
        if(password.newPassword==undefined){
            setToastMessage({state:true,message:"hot mod pass mte3eke",color:"#ff2f2f"})
        }else if(password.newPassword.length<8){
            setToastMessage({state:true,message:"a9al min 8 raw",color:"#ff2f2f"})
        }else{
            setIsLoading(true)
            changePassword(password,user.token).then(result=>{
                if(result.data.passwordincorrect==true){
                    setToastMessage({state:true,message:"mot pass mte3ek le9dim 8ale",color:"#ff2f2f"})
                    setIsLoading(false)

                }else{
                    setIsLoading(false)
                    setToastMessage({state:true,message:"raw tbadel"})
                }
            }).catch(error=>{
                alert(error.message)
            })
        }
    }
    React.useEffect(()=>{
        if(toastMessage.state==true){
            setTimeout(() => {
                setToastMessage({state:false,message:""})
            }, 6000);
       
        }
       },[toastMessage])
    return (
        <div className={Style.container}>
            {toastMessage.state&&<Toast text={toastMessage.message} color={toastMessage.color}></Toast>}

            <div className={Style.header}><h1>{language.UpdateYourPassword}</h1></div>
            <div className={Style.centerInputs}>
            <div className={Style.warningText}><h1>{language.Itsagoodideatouseastrongpasswordthatyou}</h1></div>
            <div className={Style.inputContainer}><input onChange={(e)=>changeHandler(e)} type="password"  name="oldPassword"/><label>{language.oldPassword}</label></div>
            <div className={Style.warningText}><h1>{language.newpasswordneedtobeatleastlength}</h1></div>
            <div className={Style.inputContainer}><input onChange={(e)=>changeHandler(e)} type="password"  name="newPassword"/><label>{language.newPassword}</label></div>
            </div>
            <div className={Style.btn}><button  onClick={()=>UpdatePassword()}>{language.update}</button><Link href="/profile"><button>{language.cancel}</button></Link></div>

        </div>
    )
}

export default Password
