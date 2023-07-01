// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { addPayment } from "../../../api/paymentApi";

// export const addPaymentSuccess = createAsyncThunk("", async (result) => {
//     let res = await addPayment(result);
// });

// export const paymentSlice = createSlice({
//     name: "metadataPayment",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) =>
//         builder
//             .addCase(addPaymentSuccess.pending, (state, action) => {
//                 state.error = null;
//                 state.loading = true;
//             })
//             .addCase(addPaymentSuccess.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.loading = false;
//             })
//             .addCase(addPaymentSuccess.rejected, (state, action) => {
//                 state.loading = false;
//             }),
// });

// export default paymentSlice.reducer;
