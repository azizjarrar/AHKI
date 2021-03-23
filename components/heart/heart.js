import React from 'react'
import Style from './heart.module.scss'
const heart = (props) => {
    const [clicked,setClicked]=React.useState(false)
    React.useEffect(()=>{

    },[])
    const setClickedfn=()=>{
        setClicked(e=>!e)
    }

    return (
        
        <div className={Style.heart} style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} onClick={()=>setClickedfn()}>
            {clicked&&<div className={Style.heartFaded}  style={{backgroundColor:clicked==true?"#ff413f":"#abb6bf","--clicked":clicked?"#ff413f":"#abb6bf"}} ></div>}
      
        </div>
    )
}

export default heart
