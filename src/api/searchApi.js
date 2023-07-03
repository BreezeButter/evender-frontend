import axios from "./axios";

export const getSearchAll = async (input) => {
    return axios.post("/search/filter", input);
};

export const getLocationNearby = async (input) => {
    return axios.post("/search/nearby", input);
};

export const getSearchPlace = async (input) => {
    return axios.get("/search/place", input);
};
