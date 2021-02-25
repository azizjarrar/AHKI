import React from 'react'
import Style from './updateProfileData.module.scss'
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
const updateProfileData = () => {
    const [day, setday] = React.useState(18);
    const [month, setmonth] = React.useState(1);
    const [year, setyear] = React.useState(1991);

    const [registerState,setregisterState] = React.useState({userName:"",tel:"",password:"",birthDay:{day:'',month:'',year:''},dialCode:""})
    var yearArray=[]
    var dayArray =[]
    var monthArray=[]

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
             <div className={Style.ProfileImage}><div className={Style.image}><svg className={Style.camera} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera"  role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"/></svg></div></div>
                <div className={Style.userName}><h2>Aziz Jarrar</h2></div>
             <div className={Style.formContainer}>
                <form className={Style.form} onChange={(e)=>formValidation(e)}>
                        <div className={Style.inputContainer}><input name="userName" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>UserName</span></label></div>
                        <div className={Style.inputContainer}><input name="FirstName" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>Firs tName</span></label></div>
                        <div className={Style.inputContainer}><input name="lastname" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>last name</span></label></div>
                        <div className={Style.inputContainer}><input name="biography" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>biography</span></label></div>
                        <div className={Style.inputContainer}><input name="email" type="text" className={Style.input}  required/><label><span  className={Style.labelspan}>Email</span></label></div>
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
    )
}

export default updateProfileData
