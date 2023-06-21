import axios from './axios'

export const updateProfileUser = (input) => axios.patch('/profileuser', input)