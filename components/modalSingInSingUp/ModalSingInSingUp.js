import React, { useState } from 'react'
import Style from './ModalSingInSingUp.module.scss'
import 'react-phone-input-2/lib/material.css'
import PopUpMessage from '../popUpMessage/popUpMessage'
import SingIn from './singIn/singIn'
import SingUp from './singUp/singUp'
import VerifyAccount from './verifyAccount/verifyAccount'
import ChangeLanguage from '../changeLanguage/changeLanguage'

const ModalSingInSingUp = (props) => {
  const [errorMessage,setErrorMessage]=useState({state:false,text:""})// when state true show  pop up 
  const [showSingIn_Or_SHowSingUp, setShowSingIn_Or_SHowSingUp] = useState(true)/*change between sing in and sing up */
  const [verifiedAccountModal,setverifiedAccountModal]=useState(false)//when trye open modal to put the code
  const [userId,setUserId]=useState("")
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
    setErrorMessage({...e})
  }
  const openVerifieAccountModalfn=(userid)=>{
    setUserId(userid)
    setverifiedAccountModal(e=>!e)
  }
  /***test */
  return (
    <div className={Style.contrainer}>
          {errorMessage.state==true&&<PopUpMessage fnclose={closePopUp} openPopUp={errorMessage}></PopUpMessage>}
      <div className={Style.changelang}><ChangeLanguage></ChangeLanguage></div>
      <div className={Style.formContainer}>
      {verifiedAccountModal&&<VerifyAccount setErrorMessageProps={setErrorMessagefn} userId={userId}></VerifyAccount>}
        <div className={Style.closebtn} onClick={()=>closeModal()}></div>
        <div className={Style.formsContainer}>
          <SingIn openVerifieAccountModal={openVerifieAccountModalfn} setErrorMessageProps={setErrorMessagefn}showSingIn_Or_SHowSingUp={showSingIn_Or_SHowSingUp} fnshowSingInOrSingUp={fnsetShowSingIn_Or_SHowSingUp}></SingIn>
          <SingUp openVerifieAccountModal={openVerifieAccountModalfn} setErrorMessageProps={setErrorMessagefn}showSingIn_Or_SHowSingUp={showSingIn_Or_SHowSingUp} fnshowSingInOrSingUp={fnsetShowSingIn_Or_SHowSingUp}></SingUp>
        </div>

      </div>
    </div>
  )
}

export default ModalSingInSingUp
