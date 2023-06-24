import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
};
// const navigate = useNavigate();

export const registerAsync = createAsyncThunk(
    "auth/registerAsync",
    async (input, thunkApi) => {
        // สามารถรับ parameter ได้ 2 ตัว
        try {
            console.log("--->", input);
            const res = await authService.register(input);
            setAccessToken(res.data.accessToken);
            const resFetchMe = await authService.fetchMe();
            return resFetchMe.data.user;
            // return;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message); // ปกติแล้ว สิ่งที่ return มันจะมันเข้ามาอยู่ค่า fullfill
            // ตัวนี้จะถุกมาเป็น paylaod ใน action line 49
        }
    }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
    try {
        // console.log('GGGG--->',input)
        const res = await authService.login(input);
        setAccessToken(res.data.accessToken);
        const resFetchMe = await authService.fetchMe();
        console.log("ssadsadasd", resFetchMe);
        return resFetchMe.data.user;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
    }
});
export const loginGoogle = createAsyncThunk(
    "auth/loginGoogle",
    async (input, thunkApi) => {
        try {
            console.log("GGGG--->", input);
            const res = await authService.loginGoogle({
                email: input.email,
                firstName: input.given_name,
                lastName: input.family_name,
                image: input.picture,
            });
            setAccessToken(res.data.accessToken);
            const resFetchMe = await authService.fetchMe();
            console.log("ssadsadasd", resFetchMe);
            return resFetchMe.data.user;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message);
        }
    }
);

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
    //ไม่ต้องมี parameter
    try {
        const res = await authService.fetchMe();
        return res.data.user;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async () => {
    removeAccessToken();
});

const authSlice = createSlice({
    name: "auth",
    initialState,

    // reducers:{
    //     register: (state,action) =>{
    //         state.user = action.payload;
    //     },
    //     startLoading: state =>{
    //         state.loading = true
    //     }
    // },

    extraReducers: (
        builder //เขียนแบบนี้แทนข้างล่าง
    ) =>
        builder
            .addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(registerAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.error = action.payload; // err.response.data.message
                state.loading = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                toast.success("login success");
                console.log(state.isAuthenticated);
                // navigate('/home');
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.initialLoading = false;
            })
            .addCase(fetchMe.rejected, (state, action) => {
                state.error = action.payload;
                state.initialLoading = false;
            })
            .addCase(fetchMe.pending, (state) => {
                state.initialLoading = true;
            })
            .addCase(loginGoogle.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.initialLoading = false;
            })
            .addCase(loginGoogle.rejected, (state, action) => {
                state.error = action.payload;
                state.initialLoading = false;
            })
            .addCase(loginGoogle.pending, (state) => {
                state.initialLoading = true;
            }),
});

export default authSlice.reducer;
