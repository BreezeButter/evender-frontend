import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as eventService from "../../../api/eventService";

const initialState = {
    events: [],
    loading: false,
    error: null,
    eventUser: [],
    joinEventByUser: [],
    chats: [],
};

export const getAllEventsAsync = createAsyncThunk(
    "event/getAllEventsAsync",
    async (_, thunkApi) => {
        try {
            const result = await eventService.getAllEvents();
            return result.data.events;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

export const creatEventAsync = createAsyncThunk(
    "event/createEventAsync",
    async (input, thunkApi) => {
        try {
            await eventService.createEvent(input);
        } catch (err) {
            console.log(err);
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

export const getNextEventUser = createAsyncThunk(
    "event/getNextEvent",
    async (_, thunkApi) => {
        try {
            // console.log("first");
            const result = await eventService.getNextEvent();
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const getJoinEventByUserAsync = createAsyncThunk(
    "event/getJoinEventByUserAsync",
    async (_, thunkApi) => {
        try {
            const res = await eventService.getJoinEventByUser();
            return res.data.events;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

export const getChatByEventAsync = createAsyncThunk(
    "event/getChatByEventAsync",
    async (input, thunkApi) => {
        try {
            const res = await eventService.getChatByEvent(input);
            return res.data.chats;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

const eventSlice = createSlice({
    name: "event",
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
            })
            .addCase(creatEventAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(creatEventAsync.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(creatEventAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getNextEventUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNextEventUser.fulfilled, (state, action) => {
                state.loading = false;
                state.eventUser = action.payload;
            })
            .addCase(getNextEventUser.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getJoinEventByUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getJoinEventByUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.joinEventByUser = action.payload;
            })
            .addCase(getJoinEventByUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getChatByEventAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getChatByEventAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.chats = action.payload;
            })
            .addCase(getChatByEventAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

export default eventSlice.reducer;
