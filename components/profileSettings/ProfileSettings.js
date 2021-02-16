import React from 'react'
import Style from './ProfileSettings.module.scss'
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
const ProfileSettings = (props) => {
    const [day, setday] = React.useState(18);
    const [month, setmonth] = React.useState(1);
    const [year, setyear] = React.useState(1991);
    const [confirmRegisterForm,setConfirmRegisterForm]=React.useState(false)
    const [errorData,setErrorData]=React.useState({userName:{state:'false',msg:''},password:{state:'false',msg:''}})
    const [registerState,setregisterState] = React.useState({userName:"",tel:"",password:"",birthDay:{day:'',month:'',year:''},dialCode:""})
    var yearArray=[]
    var dayArray =[]
    var monthArray=[]
    React.useEffect(() => {
        document.getElementsByClassName(Style.container)[0].scrollTo(0,0)
    }, [])
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
    return (
        <div className={Style.container}>
            <div className={Style.closeBtn} onClick={()=>props.closeProfileSettings(false)}></div>

            <div className={Style.profileSettings}>
                <div className={Style.ProfileImage}><div className={Style.image}></div></div>
                <div className={Style.userName}><h2>Aziz Jarrar</h2></div>
                <div className={Style.formContainer}>
                <form className={Style.form} onChange={(e)=>formValidation(e)}>
                        <div className={Style.inputContainer}><input name="lastname" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>last name</span></label></div>
                        <div className={Style.inputContainer}><input name="userName" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>UserName</span></label></div>
                        <div className={Style.inputContainer}><input name="biography" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>biography</span></label></div>

                        <div className={Style.inputContainer}><input name="FirstName" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>Firs tName</span></label></div>
                        <div className={Style.inputContainer}><PhoneInput  country={'tn'}  value={registerState.tel} onChange={(e,country)=>onChangeHandlerRegisterPhone(e,country)} /></div>
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
                        <button>Apply change</button>

                </form>
                </div>
                </div>
                <div className={Style.otherSettings}>
                <div className={Style.oneSetting}><p>Change password</p></div>
                <div className={Style.oneSetting}><p>deactivate your account</p></div>
                <div className={Style.oneSetting}><p>Copyright</p></div>
                <div className={Style.oneSetting}><p>Privacy</p></div>
                <div className={Style.oneSetting}><p>Safety</p></div>
                <div className={Style.oneSetting}><p>Contact</p></div>
                <div className={Style.discription}><p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual</p></div>
            </div>
        </div>
    )
}

export default ProfileSettings
