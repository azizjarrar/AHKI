import React from 'react'
import Style from '../styles/singin.module.scss'
import LanguageContext from '../context/languageContext'
import Link from 'next/link'
import {Login} from '../services/user'
import ApiIsLoadingContext from '../context/apiIsLoadingContext'
import PopUpMessage from '../components/popUpMessage/popUpMessage'
import { useRouter } from 'next/router'
import UserContext from '../context/userContext'
import VerifyAccount from '../components/verifyAccount/verifyAccount'

const singin = () => {
    const [language, setLanguage] = React.useContext(LanguageContext)
    const [isLoading, setIsLoading] = React.useContext(ApiIsLoadingContext)
    const [loginState,setLoginState]=React.useState({})
    const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 
    const router = useRouter()
    const [user,setUser]=React.useContext(UserContext)
    const [openVerifieAccountModal,setOpenVerifieAccountModal]=React.useState({state:false,userid:""})

    const singIn=()=>{

        setIsLoading(true)
          Login(loginState).then(res=>{
            if(res.data.state==false){
                setErrorMessage({ state:true,text:res.data.message })
              setIsLoading(false)
            }else if(res.data.verified==false){
                setOpenVerifieAccountModal({state:true,userid:res.data.userid})
               setIsLoading(false)
            }else{
              fetch("/api/setToken",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:res.data.token})}).then(()=>{
                localStorage.setItem("ref_token",res.data.ref_token)
                setIsLoading(false)

                router.push({pathname:"/",query: { refrech: true }})
   
                

              })
            }
          }).catch(error=>{
            setIsLoading(false)
            setErrorMessage({ state: true, text: error.message })
          
          })
        }
        const setLoginData=(e)=>{
          const { name, value } = e.target
              setLoginState(e => {
            return { ...e, [name]: value }
          })
        }
        const closePopUp=()=>{
            setErrorMessage({state:false,text:""})
          }
    return (
        <div className={Style.pageContainer}>
            {errorMessage.state==true&&<PopUpMessage fnclose={closePopUp} openPopUp={errorMessage}></PopUpMessage>}
            {openVerifieAccountModal.state&&<VerifyAccount userId={openVerifieAccountModal.userid}></VerifyAccount>}

            <div className={Style.formContainer}>
                <div className={Style.Header}><h1>Sing in For Nozzla</h1></div>
                <div className={Style.descriptionHeader}><h3>{language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore}</h3></div>
                <form onSubmit={(e)=>e.preventDefault()}>
                <div className={Style.inputContainer}>
                    <input onChange={(e)=>setLoginData(e)} name="identity" className={Style.input} required></input>
                    <label><span>{language.telephoneoremail}</span></label>
                </div>
                <div className={Style.inputContainer}>
                    <input onChange={(e)=>setLoginData(e)} name="password" className={Style.input} required></input>
                    <label><span>{language.password}</span></label>
                </div>
                <div className={Style.btnContainer}>
                    <button onClick={()=>singIn()}>
                    {language.signin}
                    </button>
                </div>
                </form>
                <div className={Style.messageToCreateAccounOrForgetPassword}>
                    <p className={Style.message}>{language.YoudonthaveaccountClickhereto} <Link href="/singup"><span className={Style.clickHere} >{language.signup}</span></Link><br /> <Link href="/forgetPassword"><span className={Style.forgetPassword}>{language.ForgotPassword}</span></Link></p>
                </div>

            </div>
        </div>
    )
}

export default singin
