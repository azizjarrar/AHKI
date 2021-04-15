import axiosApiInstance from '../interceptor/interceptor'

const addLikeToPost = async (data,token) => {
    return axiosApiInstance.post('/postlike/addLikeToPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToPost = async (data,token) => {
    return axiosApiInstance.post('/postlike/checklikeToPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikePost = async (data,token) => {
    return axiosApiInstance.post('/postlike/dislikePost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const addLikeToComment = async (data,token) => {
    return axiosApiInstance.post('/postlike/addLikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToComment = async (data,token) => {
    return axiosApiInstance.post('/postlike/checklikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikeToComment = async (data,token) => {
    return axiosApiInstance.post('/postlike/dislikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getLikestUserNameFromPost = async (data,token) => {
    return axiosApiInstance.post('/postlike/getLikestUserNameFromPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getLikestUserNameFromComment = async (data,token) => {
    return axiosApiInstance.post('/postlike/getLikestUserNameFromComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const countPostLikes = async (data,token) => {
    return axiosApiInstance.post('/postlike/countPostLikes',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const countPostCommentsLikes = async (data,token) => {
    return axiosApiInstance.post('/postlike/countPostCommentsLikes',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
  export {countPostCommentsLikes,countPostLikes,getLikestUserNameFromComment,getLikestUserNameFromPost,dislikeToComment,checklikeToComment,addLikeToComment,dislikePost,addLikeToPost,checklikeToPost}