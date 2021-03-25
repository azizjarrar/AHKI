import axios from 'axios'
import {refreshAccessToken,deleteRefrechTokenOldOne} from '../services/refreshAccessToken'

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = 'http://127.0.0.1:5010/' // set default url
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
  console.log(error)
  const originalRequest = error.config;
  if(error.message=="Network Error"){
    localStorage.removeItem('ref_token');
    await axios.post("api/logout") // change token in cookies to the bew one

    alert(error.message)
    location.reload();
    return
  }
  if(error.response.status ===401){
    localStorage.removeItem('ref_token');
    await axios.post("api/logout") // change token in cookies to the bew one
    window.reload()

    return
  }
  if(error.response.status === 404){
    return
  }
  if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken(localStorage.getItem("ref_token")); 
      deleteRefrechTokenOldOne(localStorage.getItem("ref_token"))
      // send the ref token and get new token
      originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
      await axios.post("api/setToken",{token:access_token.data.token}) // change token in cookies to the bew one
      localStorage.setItem("ref_token",access_token.data.ref_token) // save the new ref_token
      return axiosApiInstance(originalRequest); // return new  request with the new token
  }
  return Promise.reject(error);
});

export  default axiosApiInstance;