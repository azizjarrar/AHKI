import React from 'react'
import Styles from './homeTodayTopics.module.scss'
import PostTodayTopic from '../postTodayTopic/postTodayTopic'
import Publication from '../../components/publication/publication'
import Following from '../../components/followingProfileList/following'
import Suggestion from '../../components/suggestion/suggestion'
const homeTodayTopics = () => {
    React.useEffect(() => {

    }, [])
    return (

            <div className={Styles.timeLine}>
                <div className={Styles.params}>
                    <div className={Styles.suggestionContainer}>
                        {/*<Suggestion></Suggestion>*/}
                    </div>
                    <div className={Styles.followingContainer}>
                        {/*<Following></Following>*/}
                    </div>
                </div>
                <div className={Styles.posts}>
                <PostTodayTopic></PostTodayTopic>
                    <div className={Styles.publicationContainer}>
                      
                    </div>
                </div>
            </div>
    )
}

export default homeTodayTopics

