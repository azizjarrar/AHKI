import axiosApiInstance from '../interceptor/interceptor'
const postnrmltopic = async (data,token) => {
  return axiosApiInstance.post('/postnrmltopic/addPost',data,{ headers: {Authorization: 'Bearer ' + token }})
}
const addDailyTopicPost = async (data,token) => {
  return axiosApiInstance.post('/postnrmltopic/addDailyTopicPost',data,{ headers: {Authorization: 'Bearer ' + token }})
}
const getCurrentUserPosts = async (token) => {
  return axiosApiInstance.post('/postnrmltopic/getCurrentUserPosts',{},{ headers: {Authorization: 'Bearer ' + token }})
}
const getOtherUserPosts = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/getOtherUserPosts',{...data})
  }
  const deletePost = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/deletePost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
  }
  const getFriendsPosts = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/getFriendsPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})
  }
  const getTodayTopicPost = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/getTodayTopicPost',{...data},{ headers: {Authorization: 'Bearer ' + token }})
  }
  const getSelectedTopicPosts = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})
  }
  const getTopUserPostsLikes = async (data) => {
    return axiosApiInstance.post('/postnrmltopic/getTopUserPostsLikes',{...data},{})
  }
export {getSelectedTopicPosts,getTopUserPostsLikes,getTodayTopicPost,addDailyTopicPost,getFriendsPosts,deletePost, getOtherUserPosts,postnrmltopic ,getCurrentUserPosts}