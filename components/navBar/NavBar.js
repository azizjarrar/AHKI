import React ,{useState} from 'react'
import Style from './NavBar.module.scss'
import ModalSingInSingUp from  '../modalSingInSingUp/ModalSingInSingUp'
const NavBar = () => {
    const [modalSingInSingUp,setModalSingInSingUp]=useState(false)
    const openModalSingInSingUp=()=>{
        setModalSingInSingUp(true)
        console.log(modalSingInSingUp)
    }
    return (
        <div className={Style.container}>
            {modalSingInSingUp&&<ModalSingInSingUp></ModalSingInSingUp>}
            <nav className={Style.nav}>
            <div className={Style.Logo}><h1>AHKI</h1></div>
            <div className={Style.Search}>
                <div className={Style.flexItems}>
                <form>
                <input name="search" type="text" placeholder="Search accounts"></input>
                <span></span>
                <div className={Style.searchImg}>
                <svg width="20" height="20" viewBox="0 0 28 38" fill="#b0b0b5" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z" fill="#b0b0b5"/>
                </svg>
                </div>
                </form>
                </div>
            </div>
            {true&&<div className={Style.authenticated}>
                <button onClick={()=>openModalSingInSingUp()}><p>Log In</p></button>
            </div>}
            {false&&<div className={Style.Nonauthenticated}>
                <div className={Style.notification}>
                <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z" fill="#FF3367"/>
                </svg>

                </div>
                <div className={Style.upload}>
                <svg width="40" height="35" viewBox="0 0 84 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.56 26.5547C71.0981 25.3008 71.4 23.9297 71.4 22.5C71.4 16.2891 65.7562 11.25 58.8 11.25C56.2144 11.25 53.7994 11.9531 51.8044 13.1484C48.1688 7.52344 41.3831 3.75 33.6 3.75C21.9975 3.75 12.6 12.1406 12.6 22.5C12.6 22.8164 12.6131 23.1328 12.6262 23.4492C5.27625 25.7578 0 32.0156 0 39.375C0 48.6914 8.46562 56.25 18.9 56.25H67.2C76.4794 56.25 84 49.5352 84 41.25C84 33.9961 78.225 27.9375 70.56 26.5547ZM51.6337 33.75H43.05V46.875C43.05 47.9062 42.105 48.75 40.95 48.75H34.65C33.495 48.75 32.55 47.9062 32.55 46.875V33.75H23.9662C22.0894 33.75 21.1575 31.7344 22.4831 30.5508L36.3169 18.1992C37.1306 17.4727 38.4694 17.4727 39.2831 18.1992L53.1169 30.5508C54.4425 31.7344 53.4975 33.75 51.6337 33.75Z" fill="#FF3367"/>
                </svg>

                </div>
                <div className={Style.profile}>
                </div>
            </div>}
            </nav>
        </div>
    )
}

export default NavBar


