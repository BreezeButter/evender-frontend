import axios from "./axios";

export const register = (input) => axios.post("auth/register", input);
export const login = (input) => axios.post("auth/login", input);
export const loginGoogle = (input) => axios.post("auth/logingoogle", input);
export const fetchMe = () => axios.get("auth/me");
