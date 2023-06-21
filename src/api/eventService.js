import axios from './axios';

export const getAllEvents = async () => await axios.get('/event/getAllEvents');
