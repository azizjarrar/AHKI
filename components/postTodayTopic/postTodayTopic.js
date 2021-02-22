import React from 'react'
import Styles from './TodayTopic.module.scss'
const PostTodayTopic = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.topic}>
            <h1>
                <span>Today Topic   &#10152; </span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            </h1>
            </div>
            <div className={Styles.userTopicContainer}>
                <div className={Styles.userImage}></div>
                <div className={Styles.postTopic}><p className={Styles.input} plaintext-only="true" contentEditable="true" role="textbox" maxLength="500"></p></div>
            </div>
            <div className={Styles.btnContainer}><button>Post</button></div>

        </div>
    )
}

export default PostTodayTopic
