import React from 'react'
import Styles from './homeUsersStorys.module.scss'
import PostUsersStorys from '../postUsersStorys/postUsersStorys'
const HomeUsersStorys = () => {
    return (
        <div className={Styles.usersTopics}>
            <PostUsersStorys></PostUsersStorys>
        </div>
    )
}

export default HomeUsersStorys
