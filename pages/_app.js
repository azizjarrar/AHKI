import '../styles/globals.scss'
import React from 'react'
import initLanguage from '../components/initLanguage/initLanguage'
import { GetUserData } from '../services/user'
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../context/userContext'
import LanguageContext from '../context/languageContext'
import ApiIsLoadingContext from '../context/apiIsLoadingContext'
import { useRouter } from 'next/router'
import Chat from '../components/chat/chat'



function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState({image:"",tel:"",biography:"",userName:"",firstname:"",lastname:"",age:"",following:0,followers:0})

  const userProvider = React.useMemo(() => ({ user, setUser }, [user, setUser]))
  /********************************************************************/
  const [language, setLanguage] = React.useState({ ...initLanguage("eng") })
  const languageProvider = React.useMemo(() => ({ language, setLanguage }, [language, setLanguage]))
  /********************************************************************/
  const [isLoading, setIsLoading] = React.useState(false)
  const loadingProvider = React.useMemo(() => ({ isLoading, setIsLoading }, [isLoading, setIsLoading]))
  const [onlyOnce,setonlyOnce]=React.useState(false)
  const router = useRouter()
  if(router.query.refrech=="true" && onlyOnce==false){
    setonlyOnce(true)
    GetUserData(pageProps.token).then(data => { 
      
      setUser(e => { return { ...e, ...data.data.data[0],token: pageProps.token } })

     }).catch(e => { })

  }
  React.useEffect(() => {
    /*****************init Token to userProvider******************/
    setUser(e => { return { ...e, token: pageProps.token } })
    /*get current lang */
    setLanguage(initLanguage(localStorage.getItem('language') || "eng"))


    /***********************************************************/
    /********************fetch user data online if there is token************************/
    /***********************************************************/
    
    if (pageProps.token) {
      GetUserData(pageProps.token).then(data => { setUser(e => { return { ...e, ...data.data.data[0] } }) }).catch(e => { })
    }
  }, [router.query.refrech])


  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/
  return (
    <>
      <div className='appWrapper'>
        <LanguageContext.Provider value={languageProvider}>
          <UserContext.Provider value={userProvider} >
            <ApiIsLoadingContext.Provider value={loadingProvider}>
              {isLoading&&<div className="loading"><LinearProgress /></div>}
              <Component {...pageProps} />
             
            </ApiIsLoadingContext.Provider>
          </UserContext.Provider>
        </LanguageContext.Provider>
      </div>
    </>
  )
}

export default MyApp
export async function getServerSideProps({ req, res }) {
  return await req.cookies.token ? { props: { token: true } } : { redirect: { destination: '/', permanent: false, } }
}
