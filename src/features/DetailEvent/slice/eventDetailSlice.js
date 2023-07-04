import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getDetailUserById,
    getUserHostEventById,
    updateEventDetail,
    createJoinEventUser,
    leaveJointEvent,
    checkUserJoinedEvent,
    deleteEvent,
} from "../../../api/detailApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
    event: {},
    hostEvent: {},
    eventRoomId: null,
    loading: false,
    userJoined: "",
    chat: {},
    joinEventByUser: {},
};

export const getEventUserDetail = createAsyncThunk(
    "eventDetail/getEventUserDetail",
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
    "eventDetail/getUserHostEvent",
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
    "eventDetail/updateDetailEvent",
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
    "eventDetail/createEventJoin",
    async (input, thunkApi) => {
        try {
            const result = await createJoinEventUser(input);
            console.log("dasdalksjdlkasjdlksajd", result.data);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const leaveJointEventsync = createAsyncThunk(
    "eventDetail/leaveJointEvent",
    async (input, thunkApi) => {
        try {
            const result = await leaveJointEvent(input);
            console.log("leaveJointEventsync_result.data", !!result.data);
            return !!result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const deleteEventEventsync = createAsyncThunk(
    "eventDetail/deleteEventEventsync",
    async (input, thunkApi) => {
        try {
            const result = await deleteEvent(input);
            return result.data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
export const checkUserJoined = createAsyncThunk(
    "eventDetail/checkUserJoined",
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
    name: "eventDetail",
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
                stage.joinEventByUser = action.payload.events;
                stage.chat = action.payload.chats;
                console.log("++joinEventByUser++", action.payload.events);
                console.log("++chat++", action.payload.chats);
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
                stage.userJoined = false;
            })
            .addCase(leaveJointEventsync.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(checkUserJoined.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(checkUserJoined.fulfilled, (stage, action) => {
                stage.userJoined = action.payload;
                stage.loading = false;
            })
            .addCase(checkUserJoined.rejected, (stage, action) => {
                stage.loading = false;
            })
            .addCase(deleteEventEventsync.pending, (stage, action) => {
                stage.loading = true;
            })
            .addCase(deleteEventEventsync.fulfilled, (stage, action) => {
                stage.loading = false;
            })
            .addCase(deleteEventEventsync.rejected, (stage, action) => {
                stage.loading = false;
            }),
});

export default eventDetailSlice.reducer;
