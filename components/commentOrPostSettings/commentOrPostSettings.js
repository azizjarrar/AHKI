import React from 'react'
import Styles from './commentOrPostSettings.module.scss'
const commentOrPostSettings = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.paramsContainer}><h3>Report</h3></div>
            <div className={Styles.paramsContainer}><h3>Delete</h3></div>
        </div>
    )
}

export default commentOrPostSettings
