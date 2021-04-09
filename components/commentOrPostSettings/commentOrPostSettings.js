import React from 'react'
import Styles from './commentOrPostSettings.module.scss'
import {deletePost} from '../../services/post'
const commentOrPostSettings = (props) => {
    var deletePostFn
    if(props.publication==true){
         deletePostFn=()=>{
            deletePost({postid:props.postid},props.token).then(result=>{
                location.reload();
            }).catch(error=>{
                console.log(error)
            })
        }
    }else if(props.userImage==true){
        /*deletePostFn=()=>{
            deletePost({postid:props.postid},props.token).then(result=>{
                location.reload();
            }).catch(error=>{
                console.log(error)
            })
        }*/
    }else if(props.imgid!=undefined){
        //hne kenou comment mta3 image
    }else{

    }

    return (
        <div className={Styles.container}>
            <div className={Styles.paramsContainer}><h3>Report</h3></div>
            {props.ownerid==props.currentUserId&&<div className={Styles.paramsContainer} onClick={()=>deletePostFn()}><h3>Delete</h3></div>}
        </div>
    )
}

export default commentOrPostSettings
