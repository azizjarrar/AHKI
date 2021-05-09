import axiosApiInstance from '../interceptor/interceptor'

const addMessage=async(data,token)=>{
    return axiosApiInstance.post("/chat/addMessage",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const getMessagesOfCurrentconversation=async(data,token)=>{
    return axiosApiInstance.post("/chat/getMessagesOfCurrentconversation",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
const getUserWhoChatWith=async(data,token)=>{
    return axiosApiInstance.post("/chat/getUserWhoChatWith",{...data},{ headers: {Authorization: 'Bearer ' + token }});
}
export {addMessage,getMessagesOfCurrentconversation,getUserWhoChatWith}