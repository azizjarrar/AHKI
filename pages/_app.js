import "../styles/globals.scss";
import NavBar from '../components/navBar/NavBar'
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      {router.pathname!="/admin"&&<NavBar ></NavBar>}
      <div className="appWrapper">
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
