import axiosApiInstance from '../interceptor/interceptor'
const getnotifications = async (data,token) => {
  return axiosApiInstance.post('/notification/getnotifications',{},{ headers: {Authorization: 'Bearer ' + token }})
}
export {getnotifications}