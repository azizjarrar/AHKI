import React from 'react'
import Style from './Toast.module.scss'
const Toast = (props) => {
    return (
        <div  className={`${Style.container}`} style={props.color!=undefined?{backgroundColor:props.color}:{}} >
            <h1>{props.text}</h1>
        </div>
    )
}

export default Toast
