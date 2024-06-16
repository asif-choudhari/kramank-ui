import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorizeUserApi, loginUserApi } from "../api/login.api";
import {
  LoginPayload,
  AuthorizeApiResponse,
  User,
  AuthorizePayload,
  LoginApiResponse,
} from "../login.types";
import { Cookies } from "react-cookie";

const cookies = new Cookies(null, { path: "/" });

export const loginUserThunk = createAsyncThunk<LoginApiResponse, LoginPayload>(
  "login/loginUser",
  async ({ email, password }) => {
    const response = await loginUserApi(email, password);
    return response;
  }
);

export const authorizeUserThunk = createAsyncThunk<
  AuthorizeApiResponse,
  AuthorizePayload
>("login/authorizeUser", async ({ token }) => {
  console.log(token, "thunk");
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
    resetError: (state) => {
      state.error = "";
    },
    resetLoginSlice: (state) => {
      state.user.email = "";
      state.user.firstName = "";
      state.user.lastName = "";
      state.status = "idle";
      state.error = "";
      state.token = "";
      cookies.remove("token");
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
        cookies.set("token", action.payload.token);
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
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        state.user.email = action.payload.email;
        state.error = "";
        state.token = cookies.get("token");
      })
      .addCase(authorizeUserThunk.rejected, (state) => {
        state.status = "failed";
        state.token = "";
      });
  },
});

export const { setToken, resetError, resetLoginSlice } = loginSlice.actions;
export default loginSlice.reducer;
