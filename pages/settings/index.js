import React from 'react'
import Styles from '../../styles/settings.module.scss'
import NavBar from '../../components/navBar/NavBar'
import SideNavBar from '../../components/profileSettings/sideNavBar/sideNavBar'
import Account from '../../components/profileSettings/Account/Account'
import Email from '../../components/profileSettings/Email/Email'
import Password from '../../components/profileSettings/Password/Password'
import Telephone from '../../components/profileSettings/Telephone/Telephone'
const ProfileSettings = (props) => {
  const [page,setPage]=React.useState("account")

    const changePage=(e)=>{
      setPage(e)
    }
    return (
      <div className={Styles.container}>
        <NavBar token={props.token}></NavBar>
          <div className={Styles.settingsContainer}>
            <div className={Styles.sideNavBar}>
            <SideNavBar changePage={changePage} ></SideNavBar>
            </div>
            <div className={Styles.profileSettings}>
              {page=="account"&&<Account></Account>}
              {page=="email"&&<Email></Email>}
              {page=="password"&&<Password></Password>}
              {page=="Telephone"&&<Telephone></Telephone>}
            </div>
          </div>
        </div>
    )
}

export default ProfileSettings
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:req.cookies.token}}:{redirect: { destination: '/', permanent: false, }}
}