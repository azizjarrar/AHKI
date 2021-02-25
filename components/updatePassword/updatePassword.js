import React from 'react'
import Style from './updatePassword.module.scss'
const updatePassword = () => {
    return (
        <div className={Style.container}>
                         <div className={Style.header}><h2>change Password</h2></div>

                         <div className={Style.formContainer}>
                        <form className={Style.form} onChange={(e) => formValidation(e)}>
                            <div className={Style.inputContainer}><input name="oldpassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>old Password</span></label></div>
                            <div className={Style.inputContainer}><input name="newPassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>new Password</span></label></div>
                            <button>Apply change</button>
                        </form>
                    </div>
        </div>
    )
}

export default updatePassword
