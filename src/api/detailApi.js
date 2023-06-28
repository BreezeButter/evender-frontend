import axios from "./axios";

export const getDetailUserById = async (id) =>
    await axios.get(`/eventdetails/${id}`);
export const getUserHostEventById = async (id) =>
    await axios.get(`/eventdetails/user/${id}`);
export const updateEventDetail = async (id, input) =>
    await axios.put(`/eventdetails/updateDetailEvent/${id}`, input);
export const createJoinEventUser = async (id) =>
    await axios.post(`/eventdetails/${id}`);
export const leaveJointEvent = async (id) =>
    await axios.delete(`/eventdetails/${id}`);
export const checkUserJoinedEvent = async (id) =>
    await axios.get(`/eventdetails/check/${id}`);
export const deleteEvent = async (id) =>
    await axios.delete(`/eventdetails/delevent/${id}`);
