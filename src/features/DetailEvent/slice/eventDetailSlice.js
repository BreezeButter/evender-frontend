import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getDetailUserById,
    getUserHostEventById,
} from '../../../api/detailApi';

const initialState = {
    event: {},
    hostEvent: {},
    loading: false,
};

export const getEventUserDetail = createAsyncThunk(
    'detail/:id',
    async (input, thunkApi) => {
        try {
            const result = await getDetailUserById(input);

            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const getUserHostEvent = createAsyncThunk(
    'detail/user/:id',
    async (input, thunkApi) => {
        try {
            const result = await getUserHostEventById(input);

            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

const eventDetailSlice = createSlice({
    name: 'Detail',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getEventUserDetail.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(getEventUserDetail.fulfilled, (stage, action) => {
                stage.event = action.payload;
                stage.loading = false;
            })
            .addCase(getEventUserDetail.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(getUserHostEvent.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(getUserHostEvent.fulfilled, (stage, action) => {
                stage.hostEvent = action.payload;
                stage.loading = false;
            })
            .addCase(getUserHostEvent.rejected, (stage, action) => {
                stage.loading = false;
            }),
});

export default eventDetailSlice.reducer;
