import React from 'react'
import Style from './Password.module.scss'

const Password = () => {
    return (
        <div className={Style.container}>
            <div className={Style.header}><h1>Update Your Password</h1></div>
            <div className={Style.centerInputs}>
            <div className={Style.warningText}><h1>It's a good idea to use a strong password that you're not using elsewhere</h1></div>
            <div className={Style.inputContainer}><input type="password"  name="password"/><label>old Password</label></div>
            <div className={Style.inputContainer}><input type="password"  name="newPassword"/><label>new Password</label></div>
            </div>
            <div className={Style.btn}><button>Update</button><button>Cancel</button></div>

        </div>
    )
}

export default Password
