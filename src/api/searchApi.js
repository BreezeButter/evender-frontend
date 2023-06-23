import axios from "./axios";


export const getEventByCategory = async (input) => {
  console.log(input)
  return axios.get(`/search/category/${input}`);
};
export const getEventAll = async () => {
  return axios.get('/search/all');
};
