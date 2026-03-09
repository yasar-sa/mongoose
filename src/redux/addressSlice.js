import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async () => {
    const response = await api.get("/addresses");
    return response.data;
  }
);

const addressSlice = createSlice({
  name: "addresses",

  initialState: {
    addresses: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })

      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  }
});

export default addressSlice.reducer;