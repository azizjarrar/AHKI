import React from 'react'
import Style from './biggerImagewithcomments.module.scss'
const biggerImagewithcomments = (props) => {
    return (
        <div className={Style.container}>
            <div className={Style.closeBtn}></div>
            <div className={Style.imageContainer}>
                <img src={props.imgurl}/>
            </div>
            <div className={Style.commentsContainer}>

            </div>
        </div>
    )
}

export default biggerImagewithcomments
