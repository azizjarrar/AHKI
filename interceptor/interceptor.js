import axios from 'axios'
import {refreshAccessToken} from '../services/refreshAccessToken'
const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = 'http://127.0.0.1:5010/'
axiosApiInstance.interceptors.request.use(
  async config => {

    return config;
  },
  error => {
    Promise.reject(error)
});


axiosApiInstance.interceptors.response.use((response) => {

  return response
}, async function (error) {

  const originalRequest = error.config;

  if(error.response.status === 404){
    return
  }
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    const access_token = await refreshAccessToken(localStorage.getItem("ref_token"));  
        
    originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
    let logout = await axios.post("api/logout")
    let data = await axios.post("api/setToken",{token:access_token.data.token})
    localStorage.setItem("ref_token",access_token.data.ref_token)

    return axiosApiInstance(originalRequest);
  }
  //return Promise.reject(error);
});

export  default axiosApiInstance;