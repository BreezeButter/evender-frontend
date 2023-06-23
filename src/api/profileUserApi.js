import axios from './axios'

export const updateUser = (input) => axios.put("/user/updateUser", input)
