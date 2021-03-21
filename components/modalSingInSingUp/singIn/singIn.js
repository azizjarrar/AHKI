import React from 'react'
import Style from '../ModalSingInSingUp.module.scss'
import LanguageContext from '../../../context/languageContext'
import ApiIsLoadingContext from '../../../context/apiIsLoadingContext'
import FacebookLogIn from '../../facebookLogIn/facebookLogIn'
import {Login} from '../../../services/user'
import Link from 'next/link'

const singIn = (props) => {
  const [language, setLanguage] = React.useContext(LanguageContext)
  const [isLoading, setIsLoading] = React.useContext(ApiIsLoadingContext)
  const [loginState,setLoginState]=React.useState({})

    const singIn=()=>{
      setIsLoading(true)
        Login(loginState).then(res=>{
          if(res.data.state==false){
            props.setErrorMessageProps({state:true,text:res.data.message})
            setIsLoading(false)
          }else if(res.data.verified==false){
            props.openVerifieAccountModal(res.data.userid)
            setIsLoading(false)
          }else{
            fetch("/api/setToken",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:res.data.token})}).then(()=>{
              localStorage.setItem("ref_token",res.data.ref_token)
              setIsLoading(false)
             location.reload();
            })
          }
        }).catch(e=>{
          setIsLoading(false)
          props.setErrorMessageProps({state:true,text:e.message})
        
        })
      }
      const setLoginData=(e)=>{
        const { name, value } = e.target
            setLoginState(e => {
          return { ...e, [name]: value }
        })
      }
      //onKeyUp={(e)=>e.target.value=e.target.value.replace(/[^\d]/,'')}  
    return (
        <div className={Style.singIn} style={props.showSingIn_Or_SHowSingUp ? { left: '0%' } : { left: '100%' }}>
            <form className={Style.form} onSubmit={e => {e.preventDefault();}}  autoComplete="new-password">
                    <div className={Style.pageHeader}><h2>Log in to SmouFy</h2></div>
                    <div className={Style.descriptionHeader}><h3>{language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore}</h3></div>
              <input type="text" name="" value="" readOnly={true} style={{display: "none"}}/>
              <div className={Style.inputContainer}><input   onChange={(e)=>setLoginData(e)}  defaultValue={""}   name={"identity"}  type="text" className={Style.input} required /><label><span className={Style.labelspan}>{language.telephoneoremail}</span></label></div>
              <div className={Style.inputContainer}><input   onChange={(e)=>setLoginData(e)}  defaultValue={""}   name={"password"}  type="password" className={Style.input} required /><label><span className={Style.labelspan}>{language.password}</span></label></div>
              <button className={Style.btn} onClick={()=>singIn()}>{language.signin}</button>
              <p className={Style.message}>{language.YoudonthaveaccountClickhereto} <span className={Style.clickHere} onClick={() => props.fnshowSingInOrSingUp()}>{language.signup}</span><br /> <Link href="/forgetPassword"><span className={Style.forgetPassword}>{language.ForgotPassword}</span></Link></p>
              {/*<FacebookLogIn></FacebookLogIn>*/}
            </form>
        </div>
    )
}

export default singIn
