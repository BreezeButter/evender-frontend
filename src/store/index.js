import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/Event/slice/eventSlice';

const store = configureStore({
    reducer: {
        event: eventReducer,
    },
});

export default store;
