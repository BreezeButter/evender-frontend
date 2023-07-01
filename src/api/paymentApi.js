import axios from "./axios";

//export const addPayment = (input) => axios.post("/payment/create-payment", input);

export const upBoostPost = (input) => axios.patch(`/payment/boostEvent`, input);
