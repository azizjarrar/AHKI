import React from 'react'
import Style from '../../styles/settings.module.scss'
import Link from 'next/link'

const Deactivating = () => {
    return (
        <div className={Style.container}>
            <div className={Style.Settings}>
                <div className={Style.centerData}>
                    <div className={Style.header}><h1>Deactivating or Deleting</h1></div>
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
                                <h2>This is permanent.
                                    When you delete your Facebook account, you won't be able to retrieve the content or information you've shared on Facebook. Your Messenger and all of your messages will also be deleted.</h2>
                            </div>
                            <button>Apply change</button>
                        </form>
                    </div>
                </div>
                <div className={Style.otherSettings}>
                    <Link href="/settings/passowrd"><div className={Style.oneSetting}><p>Change password</p></div></Link>
                    <div className={Style.oneSetting}><p>deactivate your account</p></div>
                    <div className={Style.oneSetting}><p>Copyright</p></div>
                    <div className={Style.oneSetting}><p>Privacy</p></div>
                    <div className={Style.oneSetting}><p>Safety</p></div>
                    <div className={Style.oneSetting}><p>Contact</p></div>
                    <div className={Style.discription}><p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual</p></div>
                </div>
            </div>
        </div>
    )
}

export default Deactivating
