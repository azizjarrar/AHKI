import axios from 'axios'
import axiosApiInstance from '../interceptor/interceptor'
// send ref token and get new token
const refreshAccessToken=async (token)=>{
   return axiosApiInstance.post("/token/getRefreshAccessToken",{ref_token:token})
}
export { refreshAccessToken }