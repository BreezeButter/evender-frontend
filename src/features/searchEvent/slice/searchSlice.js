import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as eventSearchService from "../../../api/searchApi";

const initialState = {
    event: [],
    placeLoad: [],
    eventFilter: [],
    loading: false,
    error: "",
};

export const syncEventPlace = createAsyncThunk(
    "search/syncEventPlace",
    async (input, thunkApi) => {
        try {
            const res = await eventSearchService.getSearchPlace(input);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const syncEventSearch = createAsyncThunk(
    "search/syncEventAll",
    async (input, thunkApi) => {
        try {
            const res = await eventSearchService.getSearchAll(input);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(syncEventSearch.pending, (state) => {
                state.loading = true;
            })
            .addCase(syncEventSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.event = action.payload;
            })
            .addCase(syncEventSearch.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(syncEventPlace.pending, (state) => {
                state.loading = true;
            })
            .addCase(syncEventPlace.fulfilled, (state, action) => {
                state.loading = false;
                state.placeLoad = action.payload;
            })
            .addCase(syncEventPlace.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }),
});

export default searchSlice.reducer;
