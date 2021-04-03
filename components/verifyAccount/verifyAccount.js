import React from 'react'
import Style from './verifyAccount.module.scss'
import LanguageContext from '../../context/languageContext'
import {activeAccount,reSendVerificationCode} from '../../services/user'
const verifyAccount = (props) => {
    const [language, setLanguage] = React.useContext(LanguageContext)
    const [code,setCode]=React.useState("")
    const reSendCode=()=>{
        reSendVerificationCode(props.userId,code.verificationCode).then(result=>{
        })
    }
    const verifyUserAccount=()=>{
        activeAccount(props.userId,code.verificationCode).then(result=>{
            if(result.data.state == false){
                props.setErrorMessageProps({ state: true, text: result.data.message })
            }else{
                fetch("/api/setToken",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:result.data.token})}).then(()=>{
                    localStorage.setItem("ref_token",result.data.ref_token)
                      location.reload();
                })
            }
        })
    }
    const codeHandler=(e)=>{
        setCode({verificationCode:e.target.value})
    }
    return (
        <div className={Style.ContainerVerification}>
                    <div className={Style.VerificationHeader}><h1>Smoufy</h1></div>
                    <div className={Style.discrption}><p>verification code is sent to your email ou telefone type it here</p></div>
                    <form className={Style.form} onSubmit={e => {e.preventDefault();}}>
                    <div className={Style.inputContainer}><input name="userName" type="text" placeholder={language.verificationcode} className={Style.input} onChange={(e) => codeHandler(e)} required /></div>
                    <h1 className={Style.Resendcode} onClick={()=>reSendCode()}>Resend code</h1>
                    <button onClick={()=>verifyUserAccount()}  className={Style.btn}>{language.send}</button>
                    </form>
        </div>
    )
}

export default verifyAccount
