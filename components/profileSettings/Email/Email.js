import React from 'react'
import Style from './Email.module.scss'
import Toast from '../../Toast/Toast'

const Email = () => {
    setToastMessage({state:true,message:"error.message"})
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})

    React.useEffect(()=>{
     if(toastMessage.state==true){
         setTimeout(() => {
             setToastMessage({state:false,message:""})
         }, 6000);
 
     }
    },[toastMessage])
 
    return (
        <div className={Style.container}>
                {toastMessage.state&&<Toast text={toastMessage.message} ></Toast>}
            <div className={Style.header}><h1>Update Your Password</h1></div>
            <div className={Style.centerInputs}>
                <div className={Style.warningText}><h1>It's a good idea to use a strong password that you're not using elsewhere</h1></div>
                <div className={Style.emailContainer}><div className={Style.inputContainer}><input type="email"  name="email"/><label>Email</label></div><button>Send</button></div>
                <div className={Style.warningText}><h1>You Will recive confermation Code put it here And Click Update</h1></div>  
                <div className={Style.inputContainer}><input type="text"  name="code"/><label>Confermation Code</label></div>
            </div>
            <div className={Style.btn}><button>Update</button><button>Cancel</button></div>

        </div>
    )
}

export default Email
