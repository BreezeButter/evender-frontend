import axios from './axios';

export const getDetailUserById = async (id) => await axios.get(`/detail/${id}`);
export const getUserHostEventById = async (id) =>
    await axios.get(`/detail/user/${id}`);
