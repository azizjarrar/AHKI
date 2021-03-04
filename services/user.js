import axios from 'axios'

const Login = async (data) => {
  return axios.post('/user/login',{...data})
}
const Register = async (data) => {
  return axios.post('/user/register',{...data})
}
export { Login , Register}
