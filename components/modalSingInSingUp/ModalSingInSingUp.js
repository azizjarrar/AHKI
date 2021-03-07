import React, { useState, useEffect } from 'react'
import Style from './ModalSingInSingUp.module.scss'
import 'react-phone-input-2/lib/material.css'
import PopUpMessage from '../popUpMessage/popUpMessage'
import SingIn from './singIn/singIn'
import SingUp from './singUp/singUp'
import ChangeLanguage from '../changeLanguage/changeLanguage'

const ModalSingInSingUp = (props) => {
  const [errorMessage,setErrorMessage]=useState({state:false,text:""})// when state true show  pop up 
  const [showSingIn_Or_SHowSingUp, setShowSingIn_Or_SHowSingUp] = useState(true)/*change between sing in and sing up */
  const fnsetShowSingIn_Or_SHowSingUp=()=>{
    setShowSingIn_Or_SHowSingUp(e=>!e)
  }
  const closeModal=()=>{
    props.openOrcloseModal()
  }
  const closePopUp=()=>{
    setErrorMessage({state:false,text:""})
  }
  const setErrorMessagefn=(e)=>{
    console.log(e)
    setErrorMessage({...e})

  }
  return (
    <div className={Style.contrainer}>
          {errorMessage.state==true&&<PopUpMessage fnclose={closePopUp} openPopUp={errorMessage}></PopUpMessage>}
      <div className={Style.changelang}><ChangeLanguage></ChangeLanguage></div>
      <div className={Style.formContainer}>
        <div className={Style.closebtn} onClick={()=>closeModal()}></div>
        <div className={Style.formsContainer}>
          <SingIn setErrorMessageProps={setErrorMessagefn}showSingIn_Or_SHowSingUp={showSingIn_Or_SHowSingUp} fnshowSingInOrSingUp={fnsetShowSingIn_Or_SHowSingUp}></SingIn>
          <SingUp setErrorMessageProps={setErrorMessagefn}showSingIn_Or_SHowSingUp={showSingIn_Or_SHowSingUp} fnshowSingInOrSingUp={fnsetShowSingIn_Or_SHowSingUp}></SingUp>
        </div>
        <div className={Style.description}>
          <h1>smoufy</h1>
          <p>
          smoufy It is a long established fact that a reader will be distracted by the readable content
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalSingInSingUp
