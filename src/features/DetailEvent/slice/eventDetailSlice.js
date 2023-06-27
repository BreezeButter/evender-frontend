import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getDetailUserById,
    getUserHostEventById,
    updateEventDetail,
    createJoinEventUser,
    leaveJointEvent,
    checkUserJoinedEvent,
} from "../../../api/detailApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
    event: {},
    hostEvent: {},
    eventRoomId: null,
    loading: false,
    UserJoined: false,
};

export const getEventUserDetail = createAsyncThunk(
    "detail/getEventUserDetail",
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
    "detail/getUserHostEvent",
    async (input, thunkApi) => {
        try {
            const result = await getUserHostEventById(input);

            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const updateDetailEvent = createAsyncThunk(
    "/eventdetails/updateDetailEvent",
    async (input, thunkApi) => {
        try {
            const result = await updateEventDetail(input.id, input.formData);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const createJointEvent = createAsyncThunk(
    "/eventdetails/createEventJoin",
    async (input, thunkApi) => {
        try {
            const result = await createJoinEventUser(input);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const leaveJointEventsync = createAsyncThunk(
    "/eventdetails/leaveJointEvent",
    async (input, thunkApi) => {
        try {
            const result = await leaveJointEvent(input);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const checkUserJoined = createAsyncThunk(
    "/eventdetails/checkUserJoined",
    async (input, thunkApi) => {
        try {
            const result = await checkUserJoinedEvent(input);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);

const eventDetailSlice = createSlice({
    name: "Detail",
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
            })
            .addCase(updateDetailEvent.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(updateDetailEvent.fulfilled, (stage, action) => {
                stage.hostEvent = action.payload;
                stage.loading = false;
            })
            .addCase(updateDetailEvent.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(createJointEvent.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(createJointEvent.fulfilled, (stage, action) => {
                stage.eventRoomId = action.payload;
                stage.loading = false;
            })
            .addCase(createJointEvent.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(leaveJointEventsync.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(leaveJointEventsync.fulfilled, (stage, action) => {
                stage.loading = false;
                const navigate = useNavigate();
                toast.info("Leave Group Success");
                navigate("/evender/event");
            })
            .addCase(leaveJointEventsync.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(checkUserJoined.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(checkUserJoined.fulfilled, (stage, action) => {
                stage.UserJoined = action.payload;
                stage.loading = false;
            })
            .addCase(checkUserJoined.rejected, (stage, action) => {
                stage.loading = false;
            }),
});

export default eventDetailSlice.reducer;
