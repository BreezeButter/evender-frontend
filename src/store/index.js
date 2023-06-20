import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchEvent/slice/searchSlice'
import eventReducer from '../features/Event/slice/eventSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        event: eventReducer
    }
});

export default store;
