import axios from "./axios";

export const getSearchAll = async (input) => {
    console.log(input, "getSearchAll");
    return axios.post("/search/filter", input);
};
export const getSearchPlace = async (input) => {
    return axios.get("/search/place", input);
};
