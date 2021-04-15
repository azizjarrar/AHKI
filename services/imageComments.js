import axiosApiInstance from '../interceptor/interceptor'
const addCommentToImage = async (data,token) => {
  return axiosApiInstance.post('/imageComments/addCommentToImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getCommentsImage = async (data,token) => {
  return axiosApiInstance.post('/imageComments/getCommentsImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const deleteCommentFromImage = async (data,token) => {
  return axiosApiInstance.post('/imageComments/deleteCommentFromImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const countComments = async (data,token) => {
  return axiosApiInstance.post('/imageComments/countComments',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
/*****************************/
export {countComments,deleteCommentFromImage, addCommentToImage ,getCommentsImage}