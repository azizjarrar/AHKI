import React from 'react'
import Styles from '../../stylesAdmin/login.module.scss'

const login = () => {
    return (
        <div className={Styles.container}>
                    <div className={Styles.formContainer}>
                        <form className={Styles.form} >
                            <h1>Sing in</h1>
                            <div className={Styles.inputContainer}><input name="userName" type="text" className={Styles.input} required /><label><span className={Styles.labelspan}>user Name</span></label></div>
                            <div className={Styles.inputContainer}><input name="password" type="password" className={Styles.input} required /><label><span className={Styles.labelspan}>Password</span></label></div>
                            <button>Apply change</button>
                        </form>
                    </div>
        </div>
    )
}

export default login
