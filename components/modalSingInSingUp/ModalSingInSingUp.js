import React ,{useState} from 'react'
import Style from './ModalSingInSingUp.module.scss'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
 
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

    const yearArray=[]
    const dayArray =[]
    const monthArray=[]
    for(let i = 0; i < 31;i++){
      dayArray.push(i)
    }
    for(let i = 1900; i < 2030;i++){
      yearArray.push(i)
    }
    for(let i = 0; i < 12;i++){
      monthArray.push(i)
    }
    const handleChangeday = (event) => {
      setday(event.target.value);
    };   
    const handleChangeyear = (event) => {
      setyear(event.target.value);
    };   
    const handleChangemonth = (event) => {
      setmonth(event.target.value);
    };   
     const Change_To_OtherForm=()=>{
        setShowSingIn_Or_SHowSingUp(e=>!e)
    }

 
    return (
        <div className={Style.contrainer}>
            <div className={Style.formContainer}>
                <div className={Style.formsContainer}>
                <div className={Style.singIn} style={showSingIn_Or_SHowSingUp?{left:'0%'}:{left:'100%'}}>
                    <form className={Style.form}>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Tel</span></label></div>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Password</span></label></div>
                        <button >Sing In</button>
                        <p className={Style.message}>You dont have account Click here to <span className={Style.clickHere} onClick={()=>Change_To_OtherForm()}>Sing Up</span></p>
                    </form>
                </div>
                <div className={Style.singUp} style={showSingIn_Or_SHowSingUp?{left:'0%'}:{left:'-100%'}}>
                    <form className={Style.form}>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>UserName</span></label></div>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Tel</span></label></div>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Password</span></label></div>
                        <div className={Style.inputContainer}><input className={Style.input} required/><label><span className={Style.labelspan}>Password</span></label></div>
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
                            return <MenuItem value={e}>{e}</MenuItem>
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
                            return <MenuItem value={e}>{e}</MenuItem>
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
                            return <MenuItem value={e}>{e}</MenuItem>
                          })}
                        </Select>
                        </div>
                        </div>
                        </div>
                        <button >Sing In</button>
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
