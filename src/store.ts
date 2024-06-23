import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "@/area/login/state/login.slice";
import adminBranchSlice from "@/area/dashboard/admin-branch/state/admin-branch.slice";
import rasieQuerySlice from "./area/dashboard/raise-query/state/rasie-query.slice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    adminBranch: adminBranchSlice,
    rasieQuery: rasieQuerySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
