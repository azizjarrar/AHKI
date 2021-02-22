import React from 'react'
import Styles from './homeTodayTopics.module.scss'
import PostTodayTopic from '../postTodayTopic/postTodayTopic'

const homeTodayTopics = () => {
    return (
        <div className={Styles.homeTodayTopics}>
                    <PostTodayTopic></PostTodayTopic>
        </div>
    )
}

export default homeTodayTopics
