import axios from './axios'

export const updateProfileUser = (input, id) => axios.patch(`/user/${id}`, input)