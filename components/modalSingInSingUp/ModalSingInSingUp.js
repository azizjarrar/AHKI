import React ,{useState} from 'react'
import Style from './ModalSingInSingUp.module.scss'
const ModalSingInSingUp = () => {
    const [showSingIn_Or_SHowSingUp,setShowSingIn_Or_SHowSingUp]=useState(true)
    const Change_To_OtherForm=()=>{
        console.log(showSingIn_Or_SHowSingUp)
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
                        <div className={Style.inputContainer}><div className={Style.Age}><p>Age</p></div></div>
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
