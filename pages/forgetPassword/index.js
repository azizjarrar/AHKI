import React from 'react'
import Style from '../../styles/forgetPassword.module.scss'
import Link from 'next/link'

import {searchAccountToForgetPassword,resetPasswordApi,SetNewPasswordApi} from '../../services/user'
import PopUpMessage from '../../components/popUpMessage/popUpMessage'
import { useRouter } from 'next/router'

const forgetPassword = () => {
    const [identity,setidentity]=React.useState("")//hedha i najem i koun ya email ya telephone il id li chi tala3 bih utilisateur chkon
    const [userFound,setUserFound]=React.useState({state:false,userData:{}})//5arej error ken user mafamech
    const [errorMessage,setErrorMessage]=React.useState({state:false,text:""})// when state true show  pop up 

    //hedha li chi sagel fih il abed ki chi lawej ala rohou bil email wala tel
    const changeHandler=(e)=>{
        setidentity({identity:e.target.value})
    }
    // hedhi tsaker il pop up ki tethal
    const closePopUp=()=>{
        setErrorMessage({state:false,text:""})
      }
      //hedha il api li 5alik tlawej ala abed ken mawjoud wala le
    const searchAccount=()=>{
        searchAccountToForgetPassword(identity).then(result=>{
            if(result.data.state==true){
                
                setUserFound({state:true,userData:result.data.data})
            }else{
                setErrorMessage({state:true,text:"user not found"})
            }
        })
    }
    const setErrorMessagefn=(e)=>{
        setErrorMessage({...e})
      }
    return (
        <div className={Style.container}>
            <nav className={Style.nav}>
                <div className={Style.Logo}><h1>Spaksi</h1></div>
                <div className={Style.login}>
                <button ><p>Log In</p></button>
                </div>
            </nav>
            {errorMessage.state==true&&<PopUpMessage fnclose={closePopUp} openPopUp={errorMessage}></PopUpMessage>}
            {userFound.state&&<UserFound setErrorMessageProps={setErrorMessagefn} {...userFound.userData}></UserFound>}
            {userFound.state==false&&
            <div className={Style.forgetPassword}>
                    <div className={Style.header}><h1>Find Your Account</h1></div>
                    <div className={Style.warningTextAndInput}>
                        <p>Please enter your email or phone number to search for your account.</p>
                        <div onChange={(e)=>changeHandler(e)} className={Style.inputContainer} ><input placeholder="email or Telephone"></input></div>
                    </div>
                    <div className={Style.buttonsContainer}><button onClick={()=>searchAccount()}>Search</button><Link href="/"><button>Cancel</button></Link></div>
            </div>
            }
        </div>
    )
}

export default forgetPassword
export async function getServerSideProps({req,res}) {
    return req.cookies.token ?{props: {token:req.cookies.token},redirect: { destination: '/', permanent: false, }}:{props:{}}
}
    // tawa ken il user mawjoud chtet7alek page o5ra feha il user ou kife i heb i raja3 compte mte3ou bil email wala bi tel
    const UserFound=(props)=>{
    const [userDataReset,setUserDataReset]=React.useState("")//hne yet7at il haja li 5tarha email wala tel exmpale aziz@hotmail.com 52330766
    const [type,setType]=React.useState("")//hne chit hot ken il abed 5tar email thout email ken 5tar tel thot tel bech il bd ya3rf ala chnouwa i lawej
    const [resetCode,setResetCode]=React.useState(null)//hne ki tensel ala button badel pass chi jiblk il code li chit badel bih yetsagel hne
    const RadioBoxHandler=(e)=>{
            setUserDataReset(e.target.value)
    }
    const resetPassword=()=>{
        if(userDataReset.indexOf("@")!=-1 && userDataReset.indexOf(".")!=-1){
            resetPasswordApi({type:"email",email:userDataReset}).then(result=>{
                setResetCode(result.data)
                setType("email")
            }).catch(error=>{
            props.setErrorMessageProps({state:true,text:error.message})
        })
    }else{
        //hne ki yebda tel
    }
    }
    if(resetCode!=null){
        return <SetNewPassword setErrorMessageProps={props.setErrorMessageProps} type={type} userDataReset={userDataReset}></SetNewPassword>
    }else{
        return(
            <div className={Style.userFoundContainer}>
                <div className={Style.userData}>
                    <div className={Style.imageContainer}><img src={props.userProfileImageUrl || "/avatar.png"}/></div>
                    <div className={Style.userName}><h3>{props.userName}</h3></div></div>
                    <div className={Style.radioBoxContainer}>
                        {props.email!=undefined&&<div className={Style.radioInput}><p>Email : {props.email}</p><input type="radio" onChange={(e)=>RadioBoxHandler(e)} name="radio" value={props.email}/></div>}
                        {props.tel!=undefined&&<div className={Style.radioInput}><p>Telephone : {props.tel}</p><input type="radio" onChange={(e)=>RadioBoxHandler(e)} name="radio" value={props.tel}/></div>}
                    </div>
                    <div className={Style.buttonsContainer}><button onClick={()=>resetPassword()}>Send</button><Link href="/"><button>Cancel</button></Link></div>
                </div>
        )
    }

}

const SetNewPassword=(props)=>{
    // hne ba3d masebon b3ath il code mte3ek chtethalk page thot feha code ou mdp mte3ek jdid
    const [codeAndNewPassword,setCodeAndNewPassword]=React.useState("")//handler mta3 code ou pass jdid
    const router = useRouter()

    const changeToNewPassword=()=>{
        //type houwa email wala tel ou il userDateReset houwa exmpale azizjarrar@gmail.com ,52330766 
        SetNewPasswordApi({...codeAndNewPassword,type:props.type,identity:props.userDataReset}).then(result=>{
            //            props.setErrorMessageProps({state:true,text:error.message})
            if(result.data.typeError=="done"){
                router.push("/")


            }else if(result.data.typeError=="incorectCode"){
                props.setErrorMessageProps({state:true,text:"code 8alet"})

            }else{
                props.setErrorMessageProps({state:true,text:"code ofe wa9tou"})

            }
        })
    }
    const changeHandler=(e)=>{
        setCodeAndNewPassword(old=>{
            return {...old,[e.target.name]:e.target.value}
        })
    }
    return(
        <div className={Style.SetNewPasswordContainer}>
            <div className={Style.header}><h1>set new Password</h1></div>
            <div onChange={(e)=>changeHandler(e)} className={Style.inputContainer} ><input name="code" placeholder="code"></input></div>
            <div onChange={(e)=>changeHandler(e)} className={Style.inputContainer} ><input name="newPassword" type="password" placeholder="new Password"></input></div>
            <div className={Style.buttonsContainer}><button onClick={()=>changeToNewPassword()}>Update</button><Link href="/"><button>Cancel</button></Link></div>
        </div>
    )
}
