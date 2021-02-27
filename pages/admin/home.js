import React from 'react'
import Styles from '../../stylesAdmin/home.module.scss'
import Users from '../../componentsAdminDashboard/users/user'
const Admin = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.paddingBorder}>
            <div className={Styles.adminNavBar}></div>
            <div className={Styles.contentContainer}>
            <div className={Styles.sideNavBar}>
                <div className={Styles.adminImageContainer}><div className={Styles.adminImage}></div><h1>Aziz jarrar</h1></div>
                <ul>
                    <li><span>➨</span> Users</li>
                    <li><span>➨</span> Reports</li>
                </ul>
            </div>
            <div className={Styles.pagesContainer}>
                <Users></Users>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Admin
