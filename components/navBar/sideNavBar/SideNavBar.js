import React from 'react'
import Style from './SideNavBar.module.scss'
const SideNavBar = (props) => {
    console.log("props="+props.close)
    return (
        <div className={`${Style.Container} ${props.close==true&&Style.closeAnimation}`} >
            <div className={Style.sideNavBar} ></div>
        </div>
    )
}

export default SideNavBar
