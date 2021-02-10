import "../styles/globals.scss";
import NavBar from '../components/navBar/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar ></NavBar>
      <div class="appWrapper">
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
