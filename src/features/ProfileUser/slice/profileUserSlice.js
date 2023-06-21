import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateProfileUser } from '../../../api/profileUserApi';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false
}