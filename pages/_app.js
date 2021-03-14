import '../styles/globals.scss'
import React from 'react'
import UserContext from '../context/userContext'
import LanguageContext from '../context/languageContext'
import initLanguage from '../components/initLanguage/initLanguage'
import {GetUserData} from '../services/user'

function MyApp({Component, pageProps }) {
  const [user , setUser]=React.useState({})
  const [language , setLanguage]=React.useState({...initLanguage("eng")})
  const userProvider=React.useMemo(()=>({user,setUser},[user,setUser]))
  const languageProvider=React.useMemo(()=>({language,setLanguage},[language,setLanguage]))

  React.useEffect(() => {
        
        /*****************init Token to userProvider******************/
        setUser(e=>{return {...e,token:pageProps.token}})
        /*get current lang */
        setLanguage(initLanguage(localStorage.getItem('language')||"eng"))

        /***********************************************************/
        /********************fetch user data online if there is token************************/
        /***********************************************************/
        if(pageProps.token){
          GetUserData(pageProps.token).then(data=>{setUser(e=>{return {...e,...data.data.data[0]}})}).catch(e=>{})

        }
  }, [])


  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/
  return (
    <>
      <div className='appWrapper'>
      <LanguageContext.Provider value={languageProvider}>
        <UserContext.Provider value={userProvider} >
            <Component {...pageProps} />
        </UserContext.Provider>
        </LanguageContext.Provider>


      </div>
    </>
  )
}

export default MyApp
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:true}}:{redirect: { destination: '/', permanent: false, }}
}
