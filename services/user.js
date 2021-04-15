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
const GetOtherUsersData=async (id,token)=>{
  return axiosApiInstance.post("/user/getotherUsersData/"+id,{},{ headers: {Authorization: 'Bearer ' + token }});
}
const activeAccount=async (userid,verificationCode)=>{
  return axiosApiInstance.post("/user/activeAccount",{userid,verificationCode});
}
const reSendVerificationCode=async (userid,verificationCode)=>{
  return axiosApiInstance.post("/user/reSendVerificationCode",{userid,verificationCode});
}
const removeToken=async (userid)=>{
  return axiosApiInstance.post("/user/removeToken",{userid});
}
const updateProfileInfo=async (newUserData,token)=>{
  return axiosApiInstance.post("/user/updateProfileInfo",{...newUserData},{ headers: {Authorization: 'Bearer ' + token }});
}
const changePassword=async (passwordChange,token)=>{
  return axiosApiInstance.post("/user/changePassword",{...passwordChange},{ headers: {Authorization: 'Bearer ' + token }});
}
const searchAccountToForgetPassword=async (identity)=>{
  return axiosApiInstance.post("/user/searchAccountToForgetPassword",{...identity});
}
const resetPasswordApi=async (dataResetPassword)=>{
  return axiosApiInstance.post("/user/resetPassword",{...dataResetPassword});
}
const SetNewPasswordApi=async (newPasswordAndTokenAndTelOrEmail)=>{
  return axiosApiInstance.post("/user/SetNewPassword",{...newPasswordAndTokenAndTelOrEmail});
}
const updateEmailSendCode=async (email,token)=>{
  return axiosApiInstance.post("/user/updateEmailSendCode",{email:email},{ headers: {Authorization: 'Bearer ' + token }});
}
const updateEmailApi=async(email,code,token)=>{
  return axiosApiInstance.post("/user/updateEmail",{email:email,code:code},{ headers: {Authorization: 'Bearer ' + token }});
}

const getrandomUsersApi=async(token)=>{
  return axiosApiInstance.post("/user/getrandomUsers",{},{ headers: {Authorization: 'Bearer ' + token }});
}
const searchUserNameApi=async(searchUserName)=>{
  return axiosApiInstance.post("/user/SearchUserByUserName",{searchUserName:searchUserName});
}


const getPrivacy=async(token)=>{
  return axiosApiInstance.post("/user/getPrivacy",{},{ headers: {Authorization: 'Bearer ' + token }});
}
const updatePrivacy=async(data,token)=>{
  return axiosApiInstance.post("/user/updatePrivacy",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
export {updatePrivacy,getPrivacy,searchUserNameApi,getrandomUsersApi,updateEmailApi,updateEmailSendCode,SetNewPasswordApi,resetPasswordApi,searchAccountToForgetPassword,changePassword ,updateProfileInfo,Login ,removeToken, Register,LoginFacebook,GetUserData,ChangeProfileImage,GetOtherUsersData,reSendVerificationCode,activeAccount}
