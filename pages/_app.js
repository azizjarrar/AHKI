import '../styles/globals.scss'
import NavBar from '../components/navBar/NavBar'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function MyApp({token,Component, pageProps }) {
  /******************************************************************************************
   *this code will load lang
   ******************************************************************************************/
  const router = useRouter()
  React.useEffect(() => {
    if (localStorage.getItem('language') == undefined) {
      localStorage.setItem('language', 'eng')
    }
  }, [])

  axios.defaults.baseURL = 'http://127.0.0.1:5010/'

  axios.interceptors.request.use(
    (request) => {
     /* request.headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer gzegzgezgzegeg`,
      }*/
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response == 404) {
      }

      return Promise.reject(error)
    }
  )

  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/
  return (
    <>
      <NavBar ></NavBar>
      <div className='appWrapper'>
        <Component  {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
