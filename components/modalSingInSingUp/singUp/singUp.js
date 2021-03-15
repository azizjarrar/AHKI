import React from 'react'
import LanguageContext from '../../../context/languageContext'
import PhoneInput from 'react-phone-input-2'
import { Register } from '../../../services/user'
import Style from '../ModalSingInSingUp.module.scss'
import { DatePicker } from 'react-rainbow-components';


const singUp = (props) => {
  const [language, setLanguage] = React.useContext(LanguageContext)
  const [confirmRegisterForm, setConfirmRegisterForm] = React.useState(false)//enable and disable sing up button if the from is not complete
  const [errorData, setErrorData] = React.useState({ userName: { state: 'false', msg: '' }, password: { state: 'false', msg: '' } ,email:{state:'false',msg:''}})//error messages
  const [registerState, setregisterState] = React.useState({ userName: "", tel: "", password: "", email: "", birthDay: "2000-01-01T23:00:00.000Z", dialCode: "" })//user register data
  const [changeEmailOrTelinit, setChangeEmailOrTel] = React.useState("email")
  var userName = React.useRef();
  var password = React.useRef();
  React.useEffect(()=>{
    setTimeout(() => {
      userName.current.value=""
      password.current.value=""
    }, 1000); 
  },[])
  const singUp = () => {
    if (changeEmailOrTelinit == "email") {
      delete registerState["tel"]
    } else {
      delete registerState["email"]
    }
    Register(registerState).then(res => {
      if (res.data.state == false) {
        props.setErrorMessageProps({ state: true, text: res.data.message })
      } else {
        props.openVerifieAccountModal(res.data.userid)
        props.fnshowSingInOrSingUp()
      }
    }).catch(e => {
      props.setErrorMessageProps({ state: true, text: e.message })
    })


  }
  const formValidation = (e) => {
    let tel=""
    let email=""
    if(e.target.form!=null){
      let userName = e.target.form[0].value || "";
      if(e.target.form[1].name=="phone"){
         tel=e.target.form[1].value;
         email=""
      }else{
        tel="";
        email=e.target.form[1].value
      }
      let password = e.target.form[2].value || ""
      let confirmPassword = e.target.form[3].value || ""
      let birdhDay = e.target.form[4].value || ""
      function validateEmail(email) 
    {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
      if(email.length>0){
        if(validateEmail(email.toLowerCase())){
          e.target.form[1].style.border = "1px solid rgba(22, 24, 35, 0.12) "
          setErrorData(e => {
            return { ...e, email: { state: 'false', msg: '' } }
          })
        }else{
          e.target.form[1].style.border = "1px solid red "

          setErrorData(e => {
            return { ...e, email: { state: 'true', msg: 'Enter a valid email address' } }
          })       
        }
      }
      if (confirmPassword.length > 1) {
        if (password != confirmPassword) {
          document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid red"
          document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid red"
          setErrorData(e => {
            return { ...e, password: { state: 'true', msg: 'the 2 password are not the same' } }
          })
        } else {
          if (password.length < 8) {
            setErrorData(e => {
              return { ...e, password: { state: 'true', msg: 'your browser must contain more than 8 letters' } }
            })
          } else {
            setErrorData(e => {
              return { ...e, password: { state: 'false', msg: 'your browser must contain more than 8 letters' } }
            })
            document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)"
            document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)"
          }
        }
      } else {
        document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)"
        document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)"
      }
      if (userName.length > 0 && password.length > 0 && confirmPassword.length > 0  && (validateEmail(email) || tel.length > 6)) {
        if (password == confirmPassword) {
          
          setConfirmRegisterForm(true)
          return true
        } else {
          setConfirmRegisterForm(false)
          return false
        }
      } else {
        setConfirmRegisterForm(false)
        return false
      }
    }
  }
  /****************************************/
  /************Set Phone Number************/
  /****************************************/
  const onChangeHandlerRegisterPhone = (data, country) => {
    setregisterState(e => {
      return { ...e, "dialCode": country.dialCode, 'tel': data }
    })
  }

  /****************************************/
  /********Set User Name and Password******/
  /****************************************/

  const userName_Password_Handler = (e) => {
    const { name, value } = e.target
    setregisterState(e => { return { ...e, [name]: value } })
  }

  
  const changeEmailOrTel = () => {

    setChangeEmailOrTel(e => {
      if(e == "email"){
        setregisterState(e=>{return {...e,email:""}})
        setConfirmRegisterForm(false)

        return "tel"
      }else{
        setregisterState(e=>{return {...e,tel:""}})
        setConfirmRegisterForm(false)

        return "email"
      }
    })
    
  }

  return (
    <div className={Style.singUp} style={props.showSingIn_Or_SHowSingUp ? { left: '0%' } : { left: '-100%' }}>
      <form className={Style.form} onSubmit={e => { e.preventDefault(); }} onChange={(e) => { formValidation(e) }}>
      <div className={Style.pageHeader}><h2>Sing up For SmouFy</h2></div>
      <div className={Style.descriptionHeader}><h3>create a profile follow other accounts talk about your owen experince and more</h3></div>
        <div className={Style.inputContainer}>
          <input ref={userName} name="userName" type="text" className={Style.input} onChange={(e) => userName_Password_Handler(e)} required />
            <label><span className={Style.labelspan}>{language.username}</span></label>
        </div>
        {errorData.userName.state == "true" && <div className={Style.errorMessage}><p>{errorData.userName.msg}</p></div>}
        <div className={Style.inputContainer}>
          <div className={Style.telOrEmail}>
            <div className={Style.labelEmailOrPassword} onClick={() => changeEmailOrTel()}>
              <p>change to email</p>
            </div>{changeEmailOrTelinit == "tel" ? <div className={Style.tel}><PhoneInput name={"tel"} specialLabel={language.phone} country={'tn'}   inputProps={{ name: 'phone',required: true,autoFocus: true}} value={registerState.tel} onChange={(e, country) => onChangeHandlerRegisterPhone(e, country)} /></div> : <div className={Style.email}><input name="email" type="text" onChange={(e) => { userName_Password_Handler(e) }} className={`${Style.input} `} required /><label><span className={Style.labelspan}>{language.email}</span></label></div>}
          </div>
        </div>
        {errorData.email.state == "true" && <div className={Style.errorMessage}><p>{errorData.email.msg}</p></div>}

        <div className={Style.inputContainer}>
          <input ref={password} name="password" type="password" onChange={(e) => { userName_Password_Handler(e) }} className={`${Style.ConfirmPassword} ${Style.input} `} required />
            <label><span className={Style.labelspan}>{language.password}</span></label>
        </div>
        {errorData.password.state == "true" && <div className={Style.errorMessage}><p>{errorData.password.msg}</p></div>}
        <div className={Style.inputContainer}>
          <input type="password" className={`${Style.input} ${Style.ConfirmPassword}`} required />
            <label><span className={Style.labelspan}>{language.confirmpassword}</span></label>
        </div>
        <div className={Style.inputContainer}>
          <DatePicker value={registerState.birthDay}
            onChange={value => setregisterState(e => {
              return { ...e, "birthDay": value }
            })}
            label="birth Day"
            formatStyle="large"
            locale={language.age}
          />
        </div>
        {confirmRegisterForm == true && <button className={Style.btn} onClick={() => singUp()}>{language.signup}</button>}

        {confirmRegisterForm == false && <button className={Style.btn} disabled style={{ opacity: 0.2, cursor: 'default' }}>{language.signup}</button>}
        <p className={Style.message}>{language.AlreadyHaveAccount}  <span className={Style.clickHere} onClick={() => props.fnshowSingInOrSingUp()}>{language.signin}</span></p>
      </form>
    </div>
  )
}

export default singUp
