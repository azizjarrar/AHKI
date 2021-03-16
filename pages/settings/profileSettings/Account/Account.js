import React from 'react'
import Style from './Account.module.scss'
import UserContext from '../../../../context/userContext'
const Account = () => {
    const [user,setUser]=React.useContext(UserContext)
    return (
        <div className={Style.container}>
            <div className={Style.header}><h1>Account Setting</h1></div>
            <div className={Style.inputsContainer}>
                <div className={Style.inputContainer}><input type="text"  defaultValue={user.userName} name="userName"/><label>user Name</label></div>
                <div className={Style.inputContainer}><input type="text"  defaultValue={user.firstname} name="firstname"/><label>first name</label></div>
                <div className={Style.inputContainer}><input type="text"  defaultValue={user.lastname} name="lastname"/><label>last name</label></div>
                <div className={Style.inputContainer}><input type="text"  defaultValue={user.age} name="age"/><label>age</label></div>
                <div className={`${Style.inputContainer} ${Style.bigInput}`}><textarea defaultValue={user.biography} maxLength="150" type="text"  name="biography"/><label>biography</label></div>
            </div>
            <div className={Style.btn}><button>Update</button><button>Cancel</button></div>
        </div>
    )
}

export default Account
/**
 *         <DatePicker value={registerState.birthDay}
            onChange={value => setregisterState(e => {
              return { ...e, "birthDay": value }
            })}
            label="birth Day"
            formatStyle="large"
            locale={language.age}
          />
 */