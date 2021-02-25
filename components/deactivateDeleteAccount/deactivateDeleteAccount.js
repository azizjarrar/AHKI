import React from 'react'
import Style from './deactivateDeleteAccount.module.scss'
const deactivateDeleteAccount = () => {
    return (
        <div className={Style.container}>
                                     <div className={Style.header}><h2>Deactivating  or  Deleting</h2></div>

            <div className={Style.formContainer}>
                <form className={Style.form} onChange={(e) => formValidation(e)}>
                    <div className={Style.inputContainer}><input name="password" type="password" className={Style.input} required /><label><span className={Style.labelspan}>password</span></label></div>
                    <div className={Style.radioContainer}>
                        <div className={Style.inputRadioContainer}><input type="radio" name="radio" value="Deactivating" /><h1>Deactivating</h1>
                        </div>
                        <h2>This can be temporary.
                                Your account will be disabled and your name and photos will be removed from most things you've shared. You'll be able to continue using Messenger.</h2>
                    </div>
                    <div className={Style.radioContainer}>
                        <div className={Style.inputRadioContainer}><input type="radio" name="radio" value="Deleting" /><h1>Deleting</h1></div>
                        <h2>This is permanent.When you delete your Facebook account, you won't be able to retrieve the content or information you've shared on Facebook. Your Messenger and all of your messages will also be deleted.</h2>
                    </div>
                    <button>Apply change</button>
                </form>
            </div>
        </div>
    )
}

export default deactivateDeleteAccount
