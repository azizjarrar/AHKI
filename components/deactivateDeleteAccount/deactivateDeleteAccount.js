import React from 'react'
import Style from './deactivateDeleteAccount.module.scss'
import LanguageContext from '../../context/languageContext'
const deactivateDeleteAccount = () => {
    const [language , setLanguage]=React.useContext(LanguageContext)

    /******************************************************************************************
      *****************************************************************************************
      ******************************************************************************************/
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
