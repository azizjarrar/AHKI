import axiosApiInstance from '../interceptor/interceptor'
// send ref token and get new token
const refreshAccessToken=async (token)=>{
   return axiosApiInstance.post("/token/getRefreshAccessToken",{ref_token:token})
}
const deleteRefrechTokenOldOne=async (RefreshAccessToken)=>{
   return axiosApiInstance.post("/token/deleteRefrechTokenOldOne",{RefreshAccessToken:RefreshAccessToken})
}
export { refreshAccessToken ,deleteRefrechTokenOldOne}