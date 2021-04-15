import axiosApiInstance from '../interceptor/interceptor'

const addLikeToImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/addLikeToImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/checklikeToImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikeImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/dislikeImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const addLikeToCommentImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/addLikeToCommentImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const checklikeToCommentImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/checklikeToCommentImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const dislikeToCommentImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/dislikeToCommentImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}


const getLikestUserNameFromImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/getLikestUserNameFromImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const getLikestUserNameFromCommentImage = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/getLikestUserNameFromCommentImage',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const countImageLikes = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/countImageLikes',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}
const countImageCommentsLikes = async (data,token) => {
    return axiosApiInstance.post('/imageLikes/countImageCommentsLikes',{...data},{ headers: {Authorization: 'Bearer ' + token }})
}

export {countImageCommentsLikes,countImageLikes,getLikestUserNameFromCommentImage,getLikestUserNameFromImage,addLikeToImage,checklikeToImage,dislikeImage,addLikeToCommentImage,checklikeToCommentImage,dislikeToCommentImage}