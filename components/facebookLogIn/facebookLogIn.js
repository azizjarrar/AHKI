import { StylesProvider } from '@material-ui/core';
import React from 'react'
import FacebookLogin from 'react-facebook-login';
import Styles from './facebookLogIn.module.scss'
const FacebookLoginFn = () =>{
    const responseFacebook=(e)=>{
        console.log(e)
    
      }
        return(
            <div className={Styles.Container}>
                {<FacebookLogin appId="428158131820092"         autoLoad={false}  fields="name,email,picture"  callback={responseFacebook} />}
            </div>
        )
}
export default FacebookLoginFn