import React from 'react'
import Style from '../ModalSingInSingUp.module.scss'
import LanguageContext from '../../../context/languageContext'
const verifyAccount = () => {
    const [language, setLanguage] = React.useContext(LanguageContext)

    return (
        <div className={Style.ContainerVerification}>
                    <div className={Style.VerificationHeader}><h1>Smoufy</h1></div>
                    <div className={Style.discrption}><p>verification code is sent to your email ou telefone type it here</p></div>
                    <form className={Style.form} onSubmit={e => {e.preventDefault();}}onChange={(e) => {formValidation(e)}}>
                    <div className={Style.inputContainer}><input name="userName" type="text" className={Style.input} onChange={(e) => userName_Password_Handler(e)} required /><label><span className={Style.labelspan}>{language.verificationcode}</span></label></div>
                    <button  className={Style.btn}>{language.send}</button>
                    </form>
        </div>
    )
}

export default verifyAccount
