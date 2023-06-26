import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as eventSearchService from "../../../api/searchApi";

const initialState = {
    placeLoad: [],
    eventFilter: [],
    locationFilter: [],
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
            const modifiedInput =
                input.placeProvince === "All"
                    ? { ...input, placeProvince: undefined }
                    : input;

            const res = await eventSearchService.getSearchAll(modifiedInput);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const syncEventNearby = createAsyncThunk(
    "search/syncEventNearby",
    async (input, thunkApi) => {
        try {
            const res = await eventSearchService.getLocationNearby(input);
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
                state.eventFilter = action.payload;
                console.log(action.payload, "action.payload");
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
            })
            .addCase(syncEventNearby.pending, (state) => {
                state.loading = true;
            })
            .addCase(syncEventNearby.fulfilled, (state, action) => {
                state.loading = false;
                state.locationFilter = action.payload;
            })
            .addCase(syncEventNearby.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }),
});

export default searchSlice.reducer;
