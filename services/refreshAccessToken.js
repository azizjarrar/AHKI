import axios from 'axios'
import axiosApiInstance from '../interceptor/interceptor'
const refreshAccessToken=async (token)=>{
   return axiosApiInstance.post("/token/getRefreshAccessToken",{ref_token:token})
}
export { refreshAccessToken }