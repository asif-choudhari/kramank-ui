import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../api/login.api";
import { LoginPayload, LoginResponse, User } from "../login.types";

export const loginUserThunk = createAsyncThunk<LoginResponse, LoginPayload>(
  "user/loginUser",
  async ({ email, password }) => {
    const response = await loginUserApi(email, password);
    return response;
  }
);

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = action.payload.error;
      })
      .addCase(loginUserThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
