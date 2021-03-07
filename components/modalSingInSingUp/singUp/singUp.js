import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import LanguageContext from '../../../context/languageContext'
import PhoneInput from 'react-phone-input-2'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Register} from '../../../services/user'

import Style from '../ModalSingInSingUp.module.scss'
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
      width: 70,
      focus: true
    },
  },
};
const singUp = (props) => {
  const [language, setLanguage] = React.useContext(LanguageContext)
  var yearArray = []
  var dayArray = []
  var monthArray = []
  const [confirmRegisterForm, setConfirmRegisterForm] = React.useState(false)//enable and disable sing up button if the from is not complete
  const [errorData, setErrorData] = React.useState({ userName: { state: 'false', msg: '' }, password: { state: 'false', msg: '' } })//error messages
  const [registerState, setregisterState] = React.useState({ userName: "", tel: "", password: "",email:"", birthDay: { day: '1', month: '1', year: '2000' }, dialCode: "" })//user register data
  const [changeEmailOrTelinit,setChangeEmailOrTel]=React.useState("email")
    const singUp=()=>{
      console.log(changeEmailOrTelinit)
      if(changeEmailOrTelinit=="email")
      {
        delete registerState["tel"]
      }else{
        delete registerState["email"]

      }
      console.log(registerState)
        Register(registerState).then(res=>{
          if(res.data.state==false){
            props.setErrorMessageProps({state:true,text:res.data.message})
          }else{
            props.fnshowSingInOrSingUp()
          }
        }).catch(e=>{
          props.setErrorMessageProps({state:true,text:res.data.message})
        })
      

      }
      const formValidation = (e) => {
        //e.preventDefault();
        let userName = e.target.form[0].value;
        let tel = e.target.form[1].value
        let password = e.target.form[2].value
        let confirmPassword = e.target.form[3].value
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
        if (userName.length > 0 && tel.length > 6 && password.length > 0 && confirmPassword.length > 0) {
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
        /****************************************/
  /************Set Phone Number************/
  /****************************************/
  const onChangeHandlerRegisterPhone = (data, country) => {
    setregisterState(e => {
      return {...e,"dialCode": country.dialCode,'tel': data}})
    }
    /****************************************/
  /****************Set bearthDay************/
  /****************************************/
  const handleChangeday = (event) => {
    setregisterState(e => {return { ...e, birthDay: { ...e.birthDay, day: event.target.value } } })
  };
  const handleChangeyear = (event) => {
    setregisterState(e => {return { ...e, birthDay: { ...e.birthDay, year: event.target.value } }})
  };
  const handleChangemonth = (event) => {
    setregisterState(e => {
      return { ...e, birthDay: { ...e.birthDay, month: event.target.value } }
    })
  };
    /****************************************/
  /********Set User Name and Password******/
  /****************************************/
  const userName_Password_Handler = (e) => {
    const { name, value } = e.target
    setregisterState(e => {return { ...e, [name]: value }})
  }

  /****************************************/
  /*************Init day Picker************/
  /****************************************/
  var y = new Date();
  for (let i = 1; i < 31; i++) {
    dayArray.push(i)
  }
  for (let i = 1900; i < y.getFullYear(); i++) {
    yearArray.push(i)
  }
  for (let i = 1; i <= 12; i++) {
    monthArray.push(i)
  }
  const changeEmailOrTel=()=>{
    console.log(changeEmailOrTelinit)
    setChangeEmailOrTel(e=>e=="email"?"tel":"email")
  }
  return (
        <div className={Style.singUp} style={props.showSingIn_Or_SHowSingUp ? { left: '0%' } : { left: '-100%' }}>
        <form className={Style.form} onSubmit={e => {e.preventDefault();}}onChange={(e) => {formValidation(e)}}>
          <div className={Style.inputContainer}><input name="userName" type="text" className={Style.input} onChange={(e) => userName_Password_Handler(e)} required /><label><span className={Style.labelspan}>{language.username}</span></label></div>
          {errorData.userName.state == "true" && <div className={Style.errorMessage}><p>{errorData.userName.msg}</p></div>}
          <div className={Style.inputContainer}><div className={Style.telOrEmail}><div className={Style.labelEmailOrPassword} onClick={()=>changeEmailOrTel()}><p>change to email</p></div>{changeEmailOrTelinit=="tel"?<div className={Style.tel}><PhoneInput specialLabel={language.phone} country={'tn'} value={registerState.tel} onChange={(e, country) => onChangeHandlerRegisterPhone(e, country)} /></div>:<div className={Style.email}><input name="email" type="text" onChange={(e) => { userName_Password_Handler(e) }}  className={`${Style.input} `} required /><label><span className={Style.labelspan}>{language.email}</span></label></div>}</div></div>
          <div className={Style.inputContainer}><input name="password" type="password" onChange={(e) => { userName_Password_Handler(e) }} className={`${Style.ConfirmPassword} ${Style.input} `} required /><label><span className={Style.labelspan}>{language.password}</span></label></div>
          {errorData.password.state == "true" && <div className={Style.errorMessage}><p>{errorData.password.msg}</p></div>}
          <div className={Style.inputContainer}><input type="password" className={`${Style.input} ${Style.ConfirmPassword}`} required /><label><span className={Style.labelspan}>{language.confirmpassword}</span></label></div>
          <div className={Style.inputContainer}>
            <div className={Style.Age}>
              <div className={Style.selectContainer}>
                <label>Day</label>
                <Select
                  MenuProps={MenuProps}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={registerState.birthDay.day}
                  onChange={handleChangeday}
                  input={<BootstrapInput />}
                >
                  {dayArray.map(e => {
                    return <MenuItem key={e} value={e}>{e}</MenuItem>
                  })}
                </Select>
              </div>
              <div className={Style.selectContainer}>
                <label>Month</label>
                <Select
                  MenuProps={MenuProps}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={registerState.birthDay.month}
                  onChange={handleChangemonth}
                  input={<BootstrapInput />}
                >
                {monthArray.map(e => {return <MenuItem key={e} value={e}>{e}</MenuItem>})}
                </Select>
              </div>
              <div className={Style.selectContainer}>
                <label>Year</label>
                <Select
                  MenuProps={MenuProps}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={registerState.birthDay.year}
                  onChange={handleChangeyear}
                  input={<BootstrapInput />}
                >{yearArray.map(e => {return <MenuItem key={e} value={e}>{e}</MenuItem>})}</Select>
              </div>
            </div>
          </div>
          {confirmRegisterForm == true && <button className={Style.btn} onClick={()=>singUp()}>{language.signup}</button>}
          {confirmRegisterForm == false && <button  className={Style.btn} disabled style={{ opacity: 0.2, cursor: 'default' }}>{language.signup}</button>}
          <p className={Style.message}>{language.AlreadyHaveAccount}  <span className={Style.clickHere} onClick={() => props.fnshowSingInOrSingUp()}>{language.signin}</span></p>
        </form>
      </div>
    )
}

export default singUp
