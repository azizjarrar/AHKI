import React from 'react'
import Style from '../../styles/settings.module.scss'
import Link from 'next/link'

const passowrd = () => {
    return (
        <div className={Style.container}>
            <div className={Style.Settings}>
                
                <div className={Style.centerData}>
                    <div className={Style.header}><h1>Change password</h1></div>
                    <div className={Style.formContainer}>
                        <form className={Style.form} onChange={(e) => formValidation(e)}>
                            <div className={Style.inputContainer}><input name="oldpassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>old Password</span></label></div>
                            <div className={Style.inputContainer}><input name="newPassword" type="password" className={Style.input} required /><label><span className={Style.labelspan}>new Password</span></label></div>
                            <button>Apply change</button>
                        </form>
                    </div>
                </div>
                <div className={Style.otherSettings}>
                <div className={Style.oneSetting}><p>Change password</p></div>
                <Link href="/settings/deactivate_delete_account"><div className={Style.oneSetting}><p>deactivate your account</p></div></Link>
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

export default passowrd
