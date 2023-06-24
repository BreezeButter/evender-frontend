import { configureStore } from "@reduxjs/toolkit";
import eventDetailReducer from "../features/DetailEvent/slice/eventDetailSlice";
import searchReducer from "../features/searchEvent/slice/searchSlice";
import eventReducer from "../features/Event/slice/eventSlice";
import authReducer from "../features/auth/slice/authSlice";
import profileUserReducer from '../features/ProfileUser/slice/profileUserSlice'

const store = configureStore({
    reducer: {
        search: searchReducer,
        event: eventReducer,
        auth: authReducer,
        eventDetail: eventDetailReducer,
        profileUser: profileUserReducer
    },

});

export default store;
