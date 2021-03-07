import React from 'react'
import FacebookLogin from 'react-facebook-login';
import Styles from './facebookLogIn.module.scss'
import { LoginFacebook } from '../../services/user'

const FacebookLoginFn = () => {
  const responseFacebook = (e) => {
    LoginFacebook({ expiresIn: e.expiresIn, accessToken: e.accessToken, id: e.id, urlImage: e.picture.data.url }).then(res => {
      if (res.data.state == false) {
        alert(res.data.message)
      } else {
        fetch("api/setToken", { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: res.data.token }) }).then((data) => {
          localStorage.setItem("ref_token", res.data.ref_token)
          location.reload();
          props.openOrcloseModal()
        })
      }
    }).catch(e => { console.log(e) })
  }
  return (
    <div className={Styles.Container}>
      {<FacebookLogin appId="428158131820092" autoLoad={false} fields="name,email,picture" callback={responseFacebook} />}
    </div>
  )
}
export default FacebookLoginFn