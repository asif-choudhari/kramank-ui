import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorizeUserApi, loginUserApi } from "../api/login.api";
import {
  LoginPayload,
  AuthResponse,
  User,
  AuthorizePayload,
} from "../login.types";

export const loginUserThunk = createAsyncThunk<AuthResponse, LoginPayload>(
  "login/loginUser",
  async ({ email, password }) => {
    const response = await loginUserApi(email, password);
    return response;
  }
);

export const authorizeUserThunk = createAsyncThunk<
  AuthResponse,
  AuthorizePayload
>("login/authorizeUser", async ({ token }) => {
  const response = await authorizeUserApi(token);
  return response;
});

type LoginState = {
  user: User;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
  token: string;
};

const initialState: LoginState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  status: "idle",
  error: "",
  token: "",
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = action.payload.error;
      })
      .addCase(loginUserThunk.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(authorizeUserThunk.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(authorizeUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = action.payload.error;
      })
      .addCase(authorizeUserThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setToken, clearError } = loginSlice.actions;
export default loginSlice.reducer;
