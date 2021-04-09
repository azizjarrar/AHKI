import axiosApiInstance from '../interceptor/interceptor'
const addCommentToImage = async (data,token) => {
  return axiosApiInstance.post('/imageComments/addCommentToImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getCommentsImage = async (data,token) => {
  return axiosApiInstance.post('/imageComments/getCommentsImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
/*****************************/
export { addCommentToImage ,getCommentsImage}