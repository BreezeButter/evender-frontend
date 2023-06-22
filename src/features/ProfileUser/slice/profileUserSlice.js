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
            await profileUserService.editProfileUser(input)
            return input;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)


const userSlice = createSlice({
    name: "profileUser",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(editProfileUser.fulfilled, (state, action) => {
                const idx = state.data.findIndex((el) => el.id === action.payload.id)
                state.data[idx] = action.payload
                state.loading = false
            })
            .addCase(editProfileUser.pending, (state) => {
                state.error = null
                state.loading = true
            })
})

export default userSlice.reducer