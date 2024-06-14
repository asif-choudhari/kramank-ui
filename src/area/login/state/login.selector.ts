import { RootState } from "@/store";

export const UserSelector = (state: RootState) => state.login.user;

export const statusSelector = (state: RootState) => state.login.status;

export const errorSelector = (state: RootState) => state.login.error;

export const tokenSelector = (state: RootState) => state.login.token;
