import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileUserService from "../../../api/profileUserApi";
// import { updateProfileUser } from '../../../api/profileUserApi';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
    hostEvent: [],
    userProfile: {},
};

export const editProfileUser = createAsyncThunk(
    "user/editProfileUser",
    async (input, thunkApi) => {
        try {
            const res = await profileUserService.updateUser(input);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const getUserHostEvent = createAsyncThunk(
    "user/getUserHostEvent",
    async (input, thunkApi) => {
        try {
            const result = await profileUserService.getUserHostEventById(input);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

export const fetchProfile = createAsyncThunk(
    "auth/fetchProfile",
    async (input, thunkApi) => {
        //ไม่ต้องมี parameter
        try {
            console.log("fetchProfile-----input----->", input);
            const res = await profileUserService.fetchUser(input);
            console.log("+++++++++++++USER_FETCH", res.data);
            return res.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message);
        }
    }
);

const userSlice = createSlice({
    name: "profileUser",
    initialState,
    reducers: {
        updateProfileImage: (state, action) => {
            state.user.profileImage = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(editProfileUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(editProfileUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(getUserHostEvent.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(getUserHostEvent.fulfilled, (stage, action) => {
                stage.hostEvent = action.payload;
                stage.loading = false;
            })
            .addCase(fetchProfile.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(fetchProfile.fulfilled, (stage, action) => {
                stage.userProfile = action.payload;
                console.log("action.payload",action.payload)
                stage.loading = false;
            }),
});

export default userSlice.reducer;
export const { updateProfileImage } = userSlice.actions;
