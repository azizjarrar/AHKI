import React from 'react'
import Style from './gallery.module.scss'
import {getUserImages} from '../../services/images'
import BiggerImagewithcomments from '../../components/biggerImagewithcomments/biggerImagewithcomments'
const gallery = (props) => {
    const [gelleryData,setGelleryData]=React.useState([])
    const [MakeImageBigger,setMakeImageBigger]=React.useState({state:false,id:""})
    React.useEffect(()=>{
        if(props.userid!=undefined){
            getUserImages({userid:props.userid},props.token).then(result=>{
                setGelleryData([...result.data.data])
            }).catch(error=>{
                console.log(error)
            })
        }

    },[props.userid])
    const MakeImageBiggerfn=(id)=>{
        props.gellerystate(!MakeImageBigger.state)
        setMakeImageBigger(e=>{
            return {state:!e.state,id:id}
        })
    }
    
    return (
        <div className={Style.container}>
        {MakeImageBigger.state&&<BiggerImagewithcomments userid={props.userid} token={props.token} close={()=>MakeImageBiggerfn()} imgid={MakeImageBigger.id} ></BiggerImagewithcomments>}
            <div className={Style.galleryHeader}><p>gallery</p></div>
            <div className={Style.imagesContainer}>
                {gelleryData.map(e=><div onClick={()=>MakeImageBiggerfn(e._id)} key={e.imageUrl} className={Style.image}><img src={e.imageUrl}/></div>)}
            </div>

        </div>
    )
}

export default gallery
