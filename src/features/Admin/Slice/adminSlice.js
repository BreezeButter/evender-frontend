import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminApi from "../../../api/adminApi";
const initialState = {
    loading: false,
    adminEvent: [],
};

export const showAllEventAdmin = createAsyncThunk(
    "/admin/showAllEvent",
    async (_, thunkApi) => {
        try {
            const result = await adminApi.showAllEvent();
            return result.data.events;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

export const getAllUserAsync = createAsyncThunk(
    "/admin/showAllUser",
    async (_, thunkApi) => {
        try {
            const result = await adminApi.showAllUser();
            console.log(result.data);
            console.log(result.data.user);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(showAllEventAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(showAllEventAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.adminEvent = action.payload;
            })
            .addCase(showAllEventAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAllUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.adminUser = action.payload;
            })
            .addCase(getAllUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

export default adminSlice.reducer;
