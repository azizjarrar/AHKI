import '../styles/globals.scss'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
function MyApp({Component, pageProps ,token}) {
  /******************************************************************************************
   *this code will load lang
   ******************************************************************************************/
  const router = useRouter()
  React.useEffect(() => {
    if (localStorage.getItem('language') == undefined) {
      localStorage.setItem('language', 'eng')
    }
  }, [])




  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/
  return (
    <>
      <div className='appWrapper'>
        <Component  {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
export async function getServerSideProps({req,res}) {
  return req.cookies.token ?{props: {token:true}}:{redirect: { destination: '/', permanent: false, }}
}
