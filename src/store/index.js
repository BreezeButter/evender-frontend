import { configureStore } from '@reduxjs/toolkit';
import eventDetailReducer from '../features/DetailEvent/slice/eventDetailSlice';

const store = configureStore({
    reducer: { eventDetail: eventDetailReducer },
});

export default store;
