import React from 'react'
import Styles from '../../styles/settings.module.scss'
import UpdateProfileData from '../../components/updateProfileData/updateProfileData'
import NavBar from '../../components/navBar/NavBar'
import { useRouter } from 'next/router'


const ProfileSettings = (props) => {
  const router = useRouter()


    return (
      <div className={Styles.container}>
        <NavBar token={props.token}></NavBar>
        <div className={Styles.Settings}>
          <div className={Styles.pagesContainer}>
          <UpdateProfileData></UpdateProfileData>
          </div>
        </div>
        </div>
    )
}

export default ProfileSettings
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:req.cookies.token}}:{redirect: { destination: '/', permanent: false, }}
}