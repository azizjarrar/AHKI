import axiosApiInstance from '../interceptor/interceptor'
const addComment = async (data,token) => {
  return axiosApiInstance.post('/comments/addComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getComments = async (data,token) => {
  return axiosApiInstance.post('/comments/getComments',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const deleteComment = async (data,token) => {
  return axiosApiInstance.post('/comments/deleteComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
/*****************************/
export { deleteComment,addComment ,getComments}