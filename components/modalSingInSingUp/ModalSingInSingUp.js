import React, { useState } from 'react'
import Style from './ModalSingInSingUp.module.scss'
import 'react-phone-input-2/lib/material.css'
import PopUpMessage from '../popUpMessage/popUpMessage'
import SingIn from './singIn/singIn'
import SingUp from './singUp/singUp'
import VerifyAccount from '../verifyAccount/verifyAccount'
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
      <div className={Style.waveContainer}>
        {/*showSingIn_Or_SHowSingUp&&<h1 className={Style.logo}>NOZZLA</h1>*/}
{     /*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1876f3" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,117.3C384,149,480,235,576,261.3C672,288,768,256,864,229.3C960,203,1056,181,1152,144C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>*/}

      </div>

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
