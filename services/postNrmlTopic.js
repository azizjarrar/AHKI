import axiosApiInstance from '../interceptor/interceptor'
const postnrmltopic = async (data,token) => {
    console.log("gzeg")
  return axiosApiInstance.post('/postnrmltopic/addPost',data,{ headers: {Authorization: 'Bearer ' + token }})
}
const getCurrentUserPosts = async (token) => {
  return axiosApiInstance.post('/postnrmltopic/getCurrentUserPosts',{},{ headers: {Authorization: 'Bearer ' + token }})
}
const getOtherUserPosts = async (data,token) => {
    return axiosApiInstance.post('/postnrmltopic/getOtherUserPosts',{...data})
  }
export { getOtherUserPosts,postnrmltopic ,getCurrentUserPosts}