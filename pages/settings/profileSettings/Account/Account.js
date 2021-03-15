import React from 'react'
import Style from './Account.module.scss'
const Account = () => {
    return (
        <div className={Style.container}>
            <div className={Style.header}><h1>Account Setting</h1></div>
            <div className={Style.inputsContainer}>
                <div className={Style.inputContainer}><input type="text"  name="userName"/><label>user Name</label></div>
                <div className={Style.inputContainer}><input type="text"  name="firstname"/><label>first name</label></div>
                <div className={Style.inputContainer}><input type="text"  name="lastname"/><label>last name</label></div>
                <div className={Style.inputContainer}><input type="text"  name="age"/><label>age</label></div>
                <div className={`${Style.inputContainer} ${Style.bigInput}`}><textarea maxLength="150" type="text"  name="biography"/><label>biography</label></div>
            </div>
            <div className={Style.btn}><button>Update</button><button>Cancel</button></div>
        </div>
    )
}

export default Account
