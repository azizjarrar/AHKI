import React from 'react'
import Style from './updatePassword.module.scss'
import languageDoc from '../Language/Language'

const updatePassword = () => {
    const [language,setlanguage]=React.useState({
        confirmpassword:languageDoc.Language.ProfileSettings.confirmpassword["eng"],
        password:languageDoc.Language.ProfileSettings.password["eng"],
        changePassword:languageDoc.Language.ProfileSettings.changePassword["eng"],
        savechange:languageDoc.Language.ProfileSettings.savechange["eng"],

       })
       React.useEffect(() => {
        setlanguage({
            confirmpassword:languageDoc.Language.ProfileSettings.confirmpassword[localStorage.getItem("language")],
            password:languageDoc.Language.ProfileSettings.password[localStorage.getItem("language")],
            savechange:languageDoc.Language.ProfileSettings.savechange[localStorage.getItem("language")],
         })
      
       }, [])
    return (
        <div className={Style.container}>
                         <div className={Style.header}><h2>{language.changePassword}</h2></div>

                         <div className={Style.formContainer}>
                        <form className={Style.form} onChange={(e) => formValidation(e)}>
                            <div className={Style.inputContainer}><input name="oldpassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>{language.password}</span></label></div>
                            <div className={Style.inputContainer}><input name="newPassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>{language.confirmpassword}</span></label></div>
                            <button>{language.savechange}</button>
                        </form>
                    </div>
        </div>
    )
}

export default updatePassword
