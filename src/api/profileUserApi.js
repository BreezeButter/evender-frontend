import axios from "./axios";

export const updateUser = (input) => axios.put("/user/updateUser", input);
export const getUserHostEventById = (id) => axios.get(`/user/allevent/${id}`);
// export const fetchUser = (id) => axios.get(`/user/fetchUser/${id}`);
