import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state, action) => {
          state.isLoading = false;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        });
    },
  },
});

export const { setUser } = authslice.actions;
export default authslice.reducer;
