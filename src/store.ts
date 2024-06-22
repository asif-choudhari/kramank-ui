import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/area/login/state/login.slice";
import adminBranchReducer from "@/area/dashboard/admin-branch/state/admin-branch.slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    adminBranch: adminBranchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
