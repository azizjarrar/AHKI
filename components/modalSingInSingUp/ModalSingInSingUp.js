import React ,{useState,useEffect} from 'react'
import Style from './ModalSingInSingUp.module.scss'
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
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
      focus:true
    },
  },
};
const ModalSingInSingUp = () => {
    const [showSingIn_Or_SHowSingUp,setShowSingIn_Or_SHowSingUp]=useState(true)
    const [day, setday] = useState(18);
    const [month, setmonth] = useState(1);
    const [year, setyear] = useState(1991);
    const [confirmRegisterForm,setConfirmRegisterForm]=useState(false)
    const [errorData,setErrorData]=useState({userName:{state:'false',msg:''},password:{state:'false',msg:''}})
    const [registerState,setregisterState] = useState({userName:"",tel:"",password:"",birthDay:{day:'',month:'',year:''},dialCode:""})
    const yearArray=[]
    const dayArray =[]
    const monthArray=[]




    /****************************************/
    /*************Init day Picker************/
    /****************************************/
    for(let i = 0; i < 31;i++){
      dayArray.push(i)
    }
    for(let i = 1900; i < 2030;i++){
      yearArray.push(i)
    }
    for(let i = 0; i <= 12;i++){
      monthArray.push(i)
    }
    /****************************************/
    /****************Set bearhDay************/
    /****************************************/
    const handleChangeday = (event) => {
      setregisterState(e=>{
        return {...e,birthDay:{...e.birthDay,day:event.target.value}}
      })
    };   
    const handleChangeyear = (event) => {
      setregisterState(e=>{
        return {...e,birthDay:{...e.birthDay,year:event.target.value}}
      })
    };   
    const handleChangemonth = (event) => {
      setregisterState(e=>{
        return {...e,birthDay:{...e.birthDay,month:event.target.value}}
      })    
    };   
    /****************************************/
    /********Set User Name and Password******/
    /****************************************/
    const userName_Password_Handler=(e)=>{
      const {name,value}=e.target
      setregisterState(e=>{
        return {...e,[name]:value}
      })
    }
    /****************************************/
    /************Set Phone Number************/
    /****************************************/
    const onChangeHandlerRegisterPhone=(data,country)=>{
      setregisterState(e=>{
        return{
            ...e,
            "dialCode":country.dialCode,
            'tel':data
        }
    })

  }
      /****************************************/
    /**change form from Sing In to Sing Up***/
    /****************************************/
    const Change_To_OtherForm=()=>{
      setShowSingIn_Or_SHowSingUp(e=>!e)
    }
    /****************************************/
    /***************Form Validator***********/
    /****************************************/
    
    const formValidation=(e)=>{
      //e.preventDefault();
            
            let userName=e.target.form[0].value;
            let tel=e.target.form[1].value
            let password=e.target.form[2].value
            let confirmPassword=e.target.form[3].value
            if(confirmPassword.length>1){
              if(password!=confirmPassword){
                document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border="1px solid red"
                document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border="1px solid red"
                setErrorData(e=>{
                  return {...e,password:{state:'true',msg:'the 2 password are not the same'}}
                })
              }else{
                if(password.length<8){
                  setErrorData(e=>{
                    return {...e,password:{state:'true',msg:'your browser must contain more than 8 letters'}}
                  })
                }else{
                  setErrorData(e=>{
                    return {...e,password:{state:'false',msg:'your browser must contain more than 8 letters'}}
                  })

                  document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border="1px solid rgba(22, 24, 35, 0.12)"
                  document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border="1px solid rgba(22, 24, 35, 0.12)"
                }

              }
            }else{
              document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border="1px solid rgba(22, 24, 35, 0.12)"
              document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border="1px solid rgba(22, 24, 35, 0.12)"
            }
            if(userName.length>0&&tel.length>6&&password.length>0&&confirmPassword.length>0){
              if(password==confirmPassword){
                console.log(tel.length)
                setConfirmRegisterForm(true)
                return true
              }else{
                setConfirmRegisterForm(false)
                return false
              }
            }else{
              setConfirmRegisterForm(false)
              return false
            }
    }
    return (
        <div className={Style.contrainer}>
            <div className={Style.formContainer}>
                <div className={Style.formsContainer}>
                <div className={Style.singIn} style={showSingIn_Or_SHowSingUp?{left:'0%'}:{left:'100%'}}>
                    <form className={Style.form}>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Tel</span></label></div>
                        <div className={Style.inputContainer}><input type="password" className={Style.input} required/><label><span className={Style.labelspan}>Password</span></label></div>
                        <button >Sing In</button>
                        <p className={Style.message}>You dont have account Click here to <span className={Style.clickHere} onClick={()=>Change_To_OtherForm()}>Sing Up</span></p>
                    </form>
                </div>
                <div className={Style.singUp} style={showSingIn_Or_SHowSingUp?{left:'0%'}:{left:'-100%'}}>
                    <form className={Style.form} onChange={(e)=>formValidation(e)}>
                        <div className={Style.inputContainer}><input name="userName" type="text" className={Style.input} onChange={(e)=>userName_Password_Handler(e)} required/><label><span  className={Style.labelspan}>UserName</span></label></div>
                        {errorData.userName.state=="true"&&<div className={Style.errorMessage}><p>{errorData.userName.msg}</p></div>}
                        <div className={Style.inputContainer}><PhoneInput  country={'tn'}  value={registerState.tel} onChange={(e,country)=>onChangeHandlerRegisterPhone(e,country)} /></div>
                        <div className={Style.inputContainer}><input  name="password" type="password" onChange={(e)=>{userName_Password_Handler(e)}} className={`${Style.ConfirmPassword} ${Style.input} `} required/><label><span className={Style.labelspan}>Password</span></label></div>
                        {errorData.password.state=="true"&&<div className={Style.errorMessage}><p>{errorData.password.msg}</p></div>}
                        <div className={Style.inputContainer}><input  type="password" className={`${Style.input} ${Style.ConfirmPassword}`}  required/><label><span className={Style.labelspan}>Password</span></label></div>
                        <div className={Style.inputContainer}>
                          <div className={Style.Age}>  
                        <div className={Style.selectContainer}>
                          <label>Day</label>
                        <Select
                          MenuProps={MenuProps}
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={day}
                          onChange={handleChangeday}
                          input={<BootstrapInput />}
                        >
                          {dayArray.map(e=>{
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
                          value={month}
                          onChange={handleChangemonth}
                          input={<BootstrapInput />}
                        >
                          {monthArray.map(e=>{
                            return <MenuItem key={e} value={e}>{e}</MenuItem>
                          })}
                        </Select>
                        </div>
                        <div className={Style.selectContainer}>
                          <label>Year</label>
                        <Select
                          MenuProps={MenuProps}
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={year}
                          onChange={handleChangeyear}
                          input={<BootstrapInput />}
                        >
                          {yearArray.map(e=>{
                            return <MenuItem key={e} value={e}>{e}</MenuItem>
                          })}
                        </Select>
                        </div>
                        </div>
                        </div>
                        {confirmRegisterForm==true&&<button>Sing Up</button>}
                        {confirmRegisterForm==false&&<button disabled style={{opacity:0.2,cursor: 'default'}}>Sing Up</button>}
                        <p className={Style.message}>Alredy Have Account  <span className={Style.clickHere} onClick={()=>Change_To_OtherForm()}>Sing In</span></p>

                </form>
                </div>
                </div>
                <div className={Style.description}>
                    <h1>AHKI</h1>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModalSingInSingUp
