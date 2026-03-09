import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await api.get("/users");
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await api.delete(`/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
