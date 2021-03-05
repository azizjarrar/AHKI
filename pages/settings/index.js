import React from 'react'
import Styles from '../../styles/settings.module.scss'
import UpdateProfileData from '../../components/updateProfileData/updateProfileData'
import UpdatePassword from '../../components/updatePassword/updatePassword'
import DeactivateDeleteAccount from '../../components/deactivateDeleteAccount/deactivateDeleteAccount'
import NavBar from '../../components/navBar/NavBar'
import Home from '../index'
import { useRouter } from 'next/router'


const ProfileSettings = (props) => {
  const router = useRouter()


    return (
      <div className={Styles.container}>
        <NavBar token={props.token}></NavBar>
        <div className={Styles.Settings}>
          <div className={Styles.pagesContainer}>
          <UpdateProfileData></UpdateProfileData>
          <UpdatePassword></UpdatePassword>
          <DeactivateDeleteAccount></DeactivateDeleteAccount>
          </div>
        </div>
        </div>
    )
}

export default ProfileSettings
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:req.cookies.token}}:{redirect: { destination: '/', permanent: false, }}
}