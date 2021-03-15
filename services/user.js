import axiosApiInstance from '../interceptor/interceptor'
const Login = async (data) => {
  return axiosApiInstance.post('/user/login',{...data})
}
const LoginFacebook = async (data) => {
  return axiosApiInstance.post('/user/loginfacebook',{...data})
}
const Register = async (data) => {
  return axiosApiInstance.post('/user/register',{...data})
}
const GetUserData = async (token) => {
  return axiosApiInstance.get('/user/GetUserData',{ headers: {Authorization: 'Bearer ' + token }})
}
const ChangeProfileImage = async (file,token)=>{
  return axiosApiInstance.post("/user/changeprofileimage",file,{ headers: {Authorization: 'Bearer ' + token }})
}
const GetOtherUsersData=async (id)=>{
  return axiosApiInstance.get("/user/getotherUsersData/"+id);
}
const activeAccount=async (userid,verificationCode)=>{
  return axiosApiInstance.post("/user/activeAccount",{userid,verificationCode});
}
const reSendVerificationCode=async (userid,verificationCode)=>{
  return axiosApiInstance.post("/user/reSendVerificationCode",{userid,verificationCode});
}
export { Login , Register,LoginFacebook,GetUserData,ChangeProfileImage,GetOtherUsersData,reSendVerificationCode,activeAccount}
