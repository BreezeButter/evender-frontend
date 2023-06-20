import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchEvent/slice/searchSlice'

const store = configureStore({
    reducer: {
        search: searchReducer
    },
});

export default store;
