import React from 'react'
import Style from './deactivateDeleteAccount.module.scss'
import languageDoc from '../Language/Language'

const deactivateDeleteAccount = () => {
    const [language,setlanguage]=React.useState({
        savechange:languageDoc.Language.ProfileSettings.savechange["eng"],
        Deactivating:languageDoc.Language.ProfileSettings.Deactivating["eng"],
        DeleteAccountHeader:languageDoc.Language.ProfileSettings.DeleteAccountHeader["eng"],
        password:languageDoc.Language.ProfileSettings.password["eng"],

       })
       React.useEffect(() => {
        setlanguage({
            savechange:languageDoc.Language.ProfileSettings.savechange[localStorage.getItem("language")],
            Deactivating:languageDoc.Language.ProfileSettings.Deactivating[localStorage.getItem("language")],
            password:languageDoc.Language.ProfileSettings.password[localStorage.getItem("language")],
         })
      
       }, [])
    return (
        <div className={Style.container}>
                                     <div className={Style.header}><h2>{language.DeleteAccountHeader}</h2></div>

            <div className={Style.formContainer}>
                <form className={Style.form} onChange={(e) => formValidation(e)}>
                    <div className={Style.inputContainer}><input name="password" type="password" className={Style.input} required /><label><span className={Style.labelspan}>{language.password}</span></label></div>
                    <div className={Style.radioContainer}>
                        <div className={Style.inputRadioContainer}><input type="radio" name="radio" value="Deleting" /><h1>{language.radioboxDelteAccount}</h1></div>
                        <h2>{language.Deactivating}</h2>
                    </div>
                    <button>{language.savechange}</button>
                </form>
            </div>
        </div>
    )
}

export default deactivateDeleteAccount
