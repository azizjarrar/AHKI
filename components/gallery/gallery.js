import React from 'react'
import Style from './gallery.module.scss'
import {getUserImages} from '../../services/user'
const gallery = (props) => {
    const [gelleryData,setGelleryData]=React.useState([])
    React.useEffect(()=>{
        if(props.userid!=undefined){
            getUserImages({userid:props.userid},props.token).then(result=>{
                setGelleryData([...result.data.data.userProfileImagesUrl])
             
            }).catch(error=>{
                console.log(error)
            })
        }

    },[props.userid])
    return (
        <div className={Style.container}>
            <div className={Style.galleryHeader}><p>gallery</p></div>
            <div className={Style.imagesContainer}>
                {gelleryData.map(e=><div key={e.imageUrl} className={Style.image}><img src={e.imageUrl}/></div>)}
            </div>

        </div>
    )
}

export default gallery
