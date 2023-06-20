import axios from 'axios';




export const getEventByCategory= async (input) => {
    return axios.get(`/search/${input}`);
  };
export const getEventAll= async () => {
    return axios.get('/search/all');
  };
