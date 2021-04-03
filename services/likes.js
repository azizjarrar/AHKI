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
const addLikeToComment = async (data,token) => {
    return axiosApiInstance.post('/like/addLikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToComment = async (data,token) => {
    return axiosApiInstance.post('/like/checklikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikeToComment = async (data,token) => {
    return axiosApiInstance.post('/like/dislikeToComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getLikestUserNameFromPost = async (data,token) => {
    return axiosApiInstance.post('/like/getLikestUserNameFromPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getLikestUserNameFromComment = async (data,token) => {
    return axiosApiInstance.post('/like/getLikestUserNameFromComment',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}

  export {getLikestUserNameFromComment,getLikestUserNameFromPost,dislikeToComment,checklikeToComment,addLikeToComment,dislikePost,addLikeToPost,checklikeToPost}