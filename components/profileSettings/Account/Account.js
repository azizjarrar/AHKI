import React from 'react'
import Style from './Account.module.scss'
import UserContext from '../../../context/userContext'
import { DatePicker } from 'react-rainbow-components';
import {updateProfileInfo} from '../../../services/user'
import ApiIsLoadingContext from '../../../context/apiIsLoadingContext'
import Toast from '../../Toast/Toast'

const Account = () => {
    const [user,setUser]=React.useContext(UserContext)
    const [isLoading, setIsLoading] = React.useContext(ApiIsLoadingContext)
    const [newUserData,setNewUserData] = React.useState("")
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
   const changeHandler=(e)=>{
    const {name,value}=e.target;
    setNewUserData(e=>{
        return {...e,[name]:value}
    })
   }
   const UpdateData=()=>{
    setIsLoading(true)
    updateProfileInfo(newUserData,user.token).then((result)=>{
        setToastMessage({state:true,message:"rak kamel amalt update mte3ek"})
        setIsLoading(false)
    }).catch(error=>{
        setToastMessage({state:true,message:error.message})
        setIsLoading(false)
    })
   }
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
            <div className={Style.header}><h1>Account Setting</h1></div>
            <div className={Style.inputsContainer}>
                <div className={Style.inputContainer}><input type="text"  onChange={(e)=>changeHandler(e)} defaultValue={user.userName} name="userName"/><label>user Name</label></div>
                <div className={Style.inputContainer}><input type="text"  onChange={(e)=>changeHandler(e)} defaultValue={user.firstname} name="firstname"/><label>first name</label></div>
                <div className={Style.inputContainer}><input type="text"  onChange={(e)=>changeHandler(e)} defaultValue={user.lastname} name="lastname"/><label>last name</label></div>
                <div className={Style.inputContainer}>
                        <DatePicker value={newUserData.age||user.age}
                        onChange={value => setNewUserData(e => {return { ...e, "age": value }})}
                        formatStyle="large"
                        //locale={language.age}
                        />
                    <label>age</label></div>
                <div className={`${Style.inputContainer} ${Style.bigInput}`}><textarea onChange={(e)=>changeHandler(e)} defaultValue={user.biography} maxLength="150" type="text"  name="biography"/><label>biography</label></div>
            </div>
            <div onClick={()=>UpdateData()} className={Style.btn}><button>Update</button><button>Cancel</button></div>
        </div>
    )
}

export default Account
/**

 */