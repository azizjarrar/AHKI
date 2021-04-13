import axiosApiInstance from '../interceptor/interceptor'

const getFollowingOfUser=async(data,token)=>{
    return axiosApiInstance.post("/following/getFollowingOfUser",{...data},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const unfollowUserApi=async(followingid,token)=>{
    return axiosApiInstance.post("/following/unfollowUser",{followingid:followingid},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const followUserApi=async(userToFollow,token)=>{
    return axiosApiInstance.post("/following/followUser",{followingid:userToFollow},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const checkIffollowApi=async(theOtherPersonId,token)=>{
    return axiosApiInstance.post("/following/checkIffollow",{followingid:theOtherPersonId},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const removeFollowPending=async(theOtherPersonId,token)=>{
    return axiosApiInstance.post("/following/removeFollowPending",{followingid:theOtherPersonId},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const acceptfollow=async(theOtherPersonId,idNotif,token)=>{
    return axiosApiInstance.post("/following/acceptfollow",{idNotif:idNotif,followingid:theOtherPersonId},{ headers: {Authorization: 'Bearer ' + token }});
  }
  const deniedfollow=async(theOtherPersonId,idNotif,token)=>{
    return axiosApiInstance.post("/following/deniedfollow",{idNotif:idNotif,followingid:theOtherPersonId},{ headers: {Authorization: 'Bearer ' + token }});
  }
  export {deniedfollow,acceptfollow,removeFollowPending,checkIffollowApi,followUserApi,unfollowUserApi,getFollowingOfUser}