import React from 'react'
import Styles from '../../styles/settings.module.scss'
import UpdateProfileData from '../../components/updateProfileData/updateProfileData'
import UpdatePassword from '../../components/updatePassword/updatePassword'
import DeactivateDeleteAccount from '../../components/deactivateDeleteAccount/deactivateDeleteAccount'
const ProfileSettings = (props) => {


    return (
      <div className={Styles.container}>
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
