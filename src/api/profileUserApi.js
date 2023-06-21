import axios from './axios'

export const updateProfileUser = (id, input) => axios.patch('/profileuser', input, id)