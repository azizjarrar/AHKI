import React from 'react'
import Styles from './userDeleteOrCheck.module.scss'
const userDeleteOrCheck = () => {
    return (
        <tr className={Styles.Container}>
                        <td><div className={Styles.userImage}></div></td>
                        <td>_id</td>
                        <td>userName</td>
                        <td>first Name</td>
                        <td>last Name</td>
                        <td>creation Date</td>
                        <td className={Styles.delete}><p>delete</p></td>
        </tr>
    )
}

export default userDeleteOrCheck
