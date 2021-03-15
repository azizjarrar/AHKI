import React from 'react'
import Styles from '../../styles/settings.module.scss'
import NavBar from '../../components/navBar/NavBar'
import { useRouter } from 'next/router'
import SideNavBar from './sideNavBar/sideNavBar'
import Account from './profileSettings/Account/Account'
const ProfileSettings = (props) => {
  const router = useRouter()


    return (
      <div className={Styles.container}>
        <NavBar token={props.token}></NavBar>
          <div className={Styles.settingsContainer}>
            <div className={Styles.sideNavBar}>
            <SideNavBar></SideNavBar>
            </div>
            <div className={Styles.profileSettings}>
              <Account></Account>
            </div>
          </div>
        </div>
    )
}

export default ProfileSettings
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:req.cookies.token}}:{redirect: { destination: '/', permanent: false, }}
}