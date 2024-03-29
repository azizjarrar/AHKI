import axiosApiInstance from '../interceptor/interceptor'
const getImageData=async(data,token)=>{
    return axiosApiInstance.post("/image/getImageData",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const deleteImage=async(data,token)=>{
  return axiosApiInstance.post("/image/deleteImage",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const getUserImages=async(data,token)=>{
  return axiosApiInstance.post("/image/getUserImages",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
  export {getUserImages,getImageData,deleteImage}