import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as eventService from '../../../api/eventService';

const initialState = {
    events: [],
    loading: false,
    error: null,
};

export const getAllEventsAsync = createAsyncThunk(
    'event/getAllEventsAsync',
    async (_, thunkApi) => {
        try {
            const result = await eventService.getAllEvents();
            return result.data.events;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

const eventSlice = createSlice({
    name: 'event',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getAllEventsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllEventsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(getAllEventsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

export default eventSlice.reducer;
