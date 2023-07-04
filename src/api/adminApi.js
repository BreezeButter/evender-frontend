import axios from "axios";

export const showAllEvent = async () => await axios.get("/admin/showAllEvent");
export const deleteEvent = async () =>
    await axios.delete("/admin/adminDeleteEvent/:id");
export const createEventAdmin = async () =>
    await axios.post("/admin/adminCreateEvent");
export const showAllUser = async () => await axios.get("/admin/showAllUser");
