import React from 'react'
import Style from './Telephone.module.scss'
import PhoneInput from 'react-phone-input-2'

const Telephone = () => {
  /*  setToastMessage({state:true,message:"error.message"})

    React.useEffect(()=>{
     if(toastMessage.state==true){
         setTimeout(() => {
             setToastMessage({state:false,message:""})
         }, 6000);
 
     }
    },[toastMessage])
   import Toast from '../../Toast/Toast'
 
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
 
    {toastMessage.state&&<Toast text={toastMessage.message} ></Toast>}
    const onChangeHandlerRegisterPhone=()=>{

    }*/
    return (
        <div className={Style.container}>
            <div className={Style.header}><h1>Update Your Password</h1></div>
            <div className={Style.centerInputs}>
                <div className={Style.warningText}><h1>It's a good idea to use a strong password that you're not using elsewhere</h1></div>
                <div className={Style.phoneContainer}><PhoneInput name={"tel"}  country={'tn'}   inputProps={{ name: 'phone',required: true,autoFocus: true}}  onChange={(e, country) => onChangeHandlerRegisterPhone(e, country)} /><button>Send</button></div>
                <div className={Style.warningText}><h1>You Will recive confermation Code put it here And Click Update</h1></div>  
                <div className={Style.inputContainer}><input type="password"  name="password"/><label>Confermation Code</label></div>

            </div>
            <div className={Style.btn}><button>Update</button><button>Cancel</button></div>

        </div>
    )
}

export default Telephone
