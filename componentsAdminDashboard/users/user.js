import React from 'react'
import Styles from './user.module.scss'
import UserDeleteOrCheck from '../userDeleteOrCheck/userDeleteOrCheck'
const user = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.Cards}>
                <div className={Styles.CardCss}><h1>Total Users 0</h1></div>
                <div className={Styles.CardCss}><h1>Users This mounth 0</h1></div>
                <div className={Styles.CardCss}><h1>Today Users 0</h1></div>
            </div>
            <div className={Styles.searchForUser}><input placeholder="User Name"></input></div>
            <div className={Styles.usersList}>
                <table >
                    <tr className={Styles.tableHeader}>
                        <td></td>
                        <td>_id</td>
                        <td>userName</td>
                        <td>first Name</td>
                        <td>last Name</td>
                        <td>creation Date</td>

                        <td>delete</td>
                    </tr>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                        <UserDeleteOrCheck></UserDeleteOrCheck>
                </table>
            </div>
        </div>
    )
}

export default user
