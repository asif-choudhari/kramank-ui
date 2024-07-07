import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorizeUserApi, loginUserApi } from "../login.api";
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
  const response = await authorizeUserApi(token);
  return response;
});

type LoginState = {
  user: User;
  error: string;
  token: string;
};

const initialState: LoginState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    companyId: -1,
    securityRights: "",
  },
  error: "",
  token: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.error = action.payload.error;
      state.token = action.payload.token;
      cookies.set("token", action.payload.token, { maxAge: 60 * 60 * 6 });
    },
    setAuth: (state, action) => {
      state.user = action.payload.user;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetLoginSlice: (state) => {
      cookies.remove("token");
      state.user.email = "";
      state.user.firstName = "";
      state.user.lastName = "";
      state.user.companyId = -1;
      state.user.securityRights = "";
      state.error = "";
      state.token = "";
    },
  },
});

export const { setLogin, setAuth, setUser, setToken, resetLoginSlice } =
  loginSlice.actions;
export default loginSlice.reducer;
