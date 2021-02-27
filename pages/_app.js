import "../styles/globals.scss";
import NavBar from '../components/navBar/NavBar'
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  React.useEffect(()=>{
    if(localStorage.getItem("language")==undefined){
      localStorage.setItem("language","eng")
    }
  },[])

  return (
    <>
      {!(router.pathname.startsWith("/admin"))&&<NavBar ></NavBar>}
      <div className="appWrapper">
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
