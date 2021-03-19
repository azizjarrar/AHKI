import React from 'react'
import Style from './Telephone.module.scss'
import PhoneInput from 'react-phone-input-2'
import LanguageContext from '../../../context/languageContext'

const Telephone = () => {
    const [language , setLanguage]=React.useContext(LanguageContext)
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
            <div className={Style.header}><h1>{language.UpdateYourPhoneNumber}</h1></div>
            <div className={Style.centerInputs}>
                <div className={Style.warningText}><h1>{language.putyournewphonenumberhere}</h1></div>
                <div className={Style.phoneContainer}><PhoneInput name={"tel"}  country={'tn'}  specialLabel={language.phone}  inputProps={{ name: 'phone',required: true,autoFocus: true}}  onChange={(e, country) => onChangeHandlerRegisterPhone(e, country)} /><button>{language.send}</button></div>
                <div className={Style.warningText}><h1>{language.YouWillreciveconfermationCodeputithereAndClickUpdate}</h1></div>  
                <div className={Style.inputContainer}><input type="password"  name="password"/><label>{language.ConfermationCode}</label></div>

            </div>
            <div className={Style.btn}><button>{language.update}</button><button>{language.cancel}</button></div>

        </div>
    )
}

export default Telephone
