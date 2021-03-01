import React from 'react'
import Styles from '../../stylesAdmin/home.module.scss'
import Users from '../../componentsAdminDashboard/users/user'
import Posts from '../../componentsAdminDashboard/posts/posts'

const Admin = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.sideNavBar}>
                <div className={Styles.header}><h1>AHKI</h1></div>
                <ul>
                    <li>Users</li>
                    <li>Posts</li>
                    <li>Reports</li>
                </ul>
            </div>
            <div className={Styles.pages}>
                    {<Posts></Posts>}
                    {/*<Users></Users>*/}
            </div>
        </div>
    )
}

export default Admin
