import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import  * as eventSearchService from '../../../api/searchApi'


const initialState = {
    event: [],
    eventFilter: [],
    loading: false,
    error:'',
};


export const syncEventByCategory = createAsyncThunk(
    'search/syncEventAll',
    async (input, thunkApi) => {
      try {
        const res = await eventSearchService.getEventByCategory(input);
       return res
       
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
      }
    } 
  );


const searchSlice = createSlice({
    name: "search",
    initialState,
    // reducers: {

    // },
    extraReducers: (builder) =>
      builder
        .addCase(syncEventByCategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(syncEventByCategory.fulfilled, (state, action) => {
          state.loading = false;
          state.product = action.payload;
        })
        .addCase(syncEventByCategory.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
    });


export default searchSlice.reducer;


