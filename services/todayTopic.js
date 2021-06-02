import axiosApiInstance from '../interceptor/interceptor'
// send ref token and get new token
const Addtopic=async (data)=>{
   return axiosApiInstance.post("/topic/Addtopic",{})
}
const getLastTopic=async ()=>{
   return axiosApiInstance.post("/topic/getLastTopic",{},{secure: true})
}
const getallTopics=async ()=>{
    return axiosApiInstance.post("/topic/getallTopics",{},{secure: true})
 }
 const getSpecificTopic=async(data)=>{
   return axiosApiInstance.post("/topic/getSpecificTopic",{...data},{secure: true})

 }
export {getSpecificTopic ,Addtopic ,getLastTopic,getallTopics}

