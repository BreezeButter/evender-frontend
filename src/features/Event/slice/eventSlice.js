import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    event: [],
    loading: false,
};

export const getAllEventsAsync = createAsyncThunk(
    'event/getAllEventsAsync',
    async (input, thunkApi) => {
        try {
        } catch (err) {}
    }
);

const eventSlice = createSlice({
    name: 'event',
    initialState,
    // extraReducers: (builder) =>
});
