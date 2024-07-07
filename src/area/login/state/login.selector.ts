import { RootState } from "@/store";

export const userSelector = (state: RootState) => state.login.user;

export const errorSelector = (state: RootState) => state.login.error;

export const tokenSelector = (state: RootState) => state.login.token;
