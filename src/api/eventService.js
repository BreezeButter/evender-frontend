import axios from "./axios";

export const getAllEvents = async () => await axios.get("/event/getAllEvents");
export const createEvent = async (input) =>
    await axios.post(`/event/createEvent`, input);

export const getNextEvent = async () => await axios.get("/event/getNextEvent");