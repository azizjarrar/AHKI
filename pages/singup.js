import React from 'react'
import Style from '../styles/singup.module.scss'
import LanguageContext from '../context/languageContext'
import Link from 'next/link'
import { DatePicker } from 'react-rainbow-components';
import PhoneInput from 'react-phone-input-2'
import { useForm } from 'react-hook-form';
import { Register } from '../services/user'
import VerifyAccount from '../components/verifyAccount/verifyAccount'
import PopUpMessage from '../components/popUpMessage/popUpMessage'
import ApiIsLoadingContext from '../context/apiIsLoadingContext'

import 'react-phone-input-2/lib/material.css'

const singup = () => {
    const [language, setLanguage] = React.useContext(LanguageContext)
    const [showEmailOrTel,setShowEmailOrTel]=React.useState("email")
    const [birthDay,setBirthDay]=React.useState("1998-01-27T23:00:00.000Z")
    const [openVerifieAccountModal,setOpenVerifieAccountModal]=React.useState({state:false,userid:""})
    const {register,handleSubmit,errors,watch}=useForm()
    const password = React.useRef({});
    password.current = watch("password", "");
    const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 
    const [isLoading, setIsLoading] = React.useContext(ApiIsLoadingContext)

    const onChangeHandlerRegisterPhone = (data, country) => {
        document.querySelector("#telId").value=JSON.stringify({"dialCode": country.dialCode, 'tel': data })

      }
      const switchTo=()=>{
        setShowEmailOrTel(e=>{
            if(e=="tel"){
                return "email"
            }else{
                return "tel"
            }
        })
      }
    const setBirthDayfn=(date)=>{
        setBirthDay(date)
        
        document.querySelector("#ageId").value=date
    }
    const onSubmit=(data)=>{
        setIsLoading(true)

        Register(data).then(res => {
            if(res.data==undefined){
                setIsLoading(false)
            }else if (res.data.state == false) {
                setErrorMessage({ state: true, text: res.data.message})
                setIsLoading(false)
            } else {
                setOpenVerifieAccountModal({state:true,userid:res.data.userid})
                setIsLoading(false)
            }
          }).catch(error => {
                setErrorMessage({ state: true, text: error.message })
                setIsLoading(false)
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="age" id="ageId"  defaultValue={"1998-01-27T23:00:00.000Z"} ref={register({required: "Required"})} style={{position:"absolute",opacity:0,pointerEvents:"none"}}></input>
            <div className={Style.Header}><h1>Sing up For NOZZLA</h1></div>
            <div className={Style.descriptionHeader}><h3>{language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore}</h3></div>
            <div className={Style.inputContainer}>
                <input className={Style.input}  ref={register} name="userName" required></input>
                <label><span>{language.username}</span></label>
            </div>
            <div className={Style.switchContainer}><p onClick={()=>switchTo()}>siwtch to {showEmailOrTel=="tel"?"email":"tel"}</p></div>
            <div className={`${Style.inputContainerTelOrEmail}` }>
                 <input type="text" name="tel" style={{position:'absolute',pointerEvents:"none",opacity:0}}></input>
                 {showEmailOrTel=="tel"&&<>
                 <input name="tel" id="telId"   ref={register({required: "Required"})} style={{position:"absolute",opacity:0,pointerEvents:"none"}}></input>
                 <PhoneInput   name={"tel"} specialLabel={language.phone} country={'tn'}   inputProps={{ name: 'phone',required: true,autoFocus: true}}  onChange={(e, country) => onChangeHandlerRegisterPhone(e, country)} />
                 </>}
                 {showEmailOrTel=="email"&&<div  className={Style.inputContainer}><input name="email" ref={register({
                required: "Required",
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email address"
                }
                })} className={Style.input} required></input>
                <label>
                    <span>{language.telephoneoremail}</span>
                </label>
                </div>
                }
            </div>
            {errors.tel && <div className={Style.error}><p>tel is required</p></div>}
            {errors.email && <div className={Style.error}><p>email is incorect</p></div>}
            <div className={Style.inputContainer}><input name="password" ref={register({required:"password required",minLength:8})} className={Style.input} required></input>
                <label>
                    <span>{language.password}</span>
                </label>
            </div>
            {errors.password && <div className={Style.error}><p>password length must be 8 at least</p></div>}
                <div className={Style.inputContainer}><input name="confirmPassword"  ref={register({
                validate: value =>
                    value === password.current || "The passwords do not match"
                })} className={Style.input} required></input>
                <label>
                    <span>{language.confirmpassword}</span>
                </label>
            </div>
            {errors.confirmPassword && <div className={Style.error}> <p>{errors.confirmPassword.message}</p></div>}

            <div className={`${Style.inputContainer} ${Style.birthDay}`}>
            <DatePicker value={birthDay}
            onChange={value => setBirthDayfn(value)}
            label="birth Day"
            formatStyle="large"
            locale={language.age}
            />
            </div>
            {errors.age && <div className={Style.error}><p>age is required</p></div>}

            <div className={Style.btnContainer}>
                <button>
                {language.signin}
                </button>
            </div>
            <div className={Style.messageToCreateAccounOrForgetPassword}>
                <p className={Style.message}>{language.AlreadyHaveAccount} <Link href="/signin"><span className={Style.clickHere} >{language.signin}</span></Link><br /> <Link href="/forgetPassword"><span className={Style.forgetPassword}>{language.ForgotPassword}</span></Link></p>
            </div>
          </form>
        </div>
    </div>
    )
}

export default singup
