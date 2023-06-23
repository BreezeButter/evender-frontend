import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as profileUserService from '../../../api/profileUserApi'
// import { updateProfileUser } from '../../../api/profileUserApi';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false
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
})

export default userSlice.reducer
export const { updateProfileImage } = userSlice.actions