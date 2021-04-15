import axiosApiInstance from '../interceptor/interceptor'

const deleteFollowApi=async(data,token)=>{
    return axiosApiInstance.post("/followers/deleteFollow",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const getFollowersOfUser=async(data,token)=>{
    return axiosApiInstance.post("/followers/getFollowersOfUser",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const countFollowersOfUser=async(data,token)=>{
    return axiosApiInstance.post("/followers/countFollowersOfUser",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
export {countFollowersOfUser,getFollowersOfUser,deleteFollowApi}