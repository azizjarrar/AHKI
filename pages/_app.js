import "../styles/globals.scss";
import NavBar from '../components/navBar/NavBar'
import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
function MyApp({ Component, pageProps }) {
  
/******************************************************************************************
*this code will load lang 
******************************************************************************************/
  const router = useRouter()
  React.useEffect(()=>{
    if(localStorage.getItem("language")==undefined){
      localStorage.setItem("language","eng")
    }
    /*axios.default.baseURL="http://localhost:5010/"
    axios.interceptors.request.use(request=>{
      //request.headers={'Content-Type': 'application/json','authorization':`Bearer ${localStorage.getItem('tokenjwt')}`}
      request.headers={'Content-Type': 'application/json','authorization':`Bearer gzegzgezgzegeg`}
      console.log(response)

      return request
    },error=>{
      return Promise.reject(error)
    })
    axios.interceptors.response.use(function (response) {
      console.log(response)
      // Do something with response data
      return response;
    }, function (error) {
      console.log(response)

      // Do something with response error
      return Promise.reject(error);
    });*/
  },[])
/******************************************************************************************
*******************************************************************************************
******************************************************************************************/
  return (
    <>
     {/*if its admin route dont show navbar */}
      {!(router.pathname.startsWith("/admin"))&&<NavBar ></NavBar>}
      <div className="appWrapper">
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
