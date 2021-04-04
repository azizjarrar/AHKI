import axiosApiInstance from '../interceptor/interceptor'
const getImageData=async(data,token)=>{
    return axiosApiInstance.post("/image/getImageData",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
  export {getImageData}