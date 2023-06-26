import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as profileUserService from '../../../api/profileUserApi'
// import { updateProfileUser } from '../../../api/profileUserApi';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
    hostEvent: [],
}

export const editProfileUser = createAsyncThunk(
    "user/editProfileUser",
    async (input, thunkApi) => {
        try {
            const res = await profileUserService.updateUser(input)
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

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

const userSlice = createSlice({
    name: "profileUser",
    initialState,
    reducers: {
        updateProfileImage: (state, action) => {
            state.user.profileImage = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(editProfileUser.pending, (state) => {
                state.loading = true
            })
            .addCase(editProfileUser.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getUserHostEvent.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(getUserHostEvent.fulfilled, (stage, action) => {
                stage.hostEvent = action.payload;
                stage.loading = false;
            })

})

export default userSlice.reducer
export const { updateProfileImage } = userSlice.actions