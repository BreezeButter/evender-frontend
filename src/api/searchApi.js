import axios from "./axios";

export const getSearchAll = async (input) => {
    return axios.get("/search/filter", input);
};
export const getSearchPlace = async (input) => {
    return axios.get("/search/place", input);
};
