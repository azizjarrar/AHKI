import axiosApiInstance from '../interceptor/interceptor'

const addLikeToPost = async (data,token) => {
    return axiosApiInstance.post('/like/addLikeToPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToPost = async (data,token) => {
    return axiosApiInstance.post('/like/checklikeToPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikePost = async (data,token) => {
    return axiosApiInstance.post('/like/dislikePost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
  export {dislikePost,addLikeToPost,checklikeToPost}