import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/area/login/state/login.slice";
import adminBranchReducer from "@/area/dashboard/admin-branch/state/admin-branch.slice";
import rasieQueryReducer from "@/area/dashboard/raise-query/state/rasie-query.slice";
import addBranchDialogReducer from "@/area/dashboard/add-branch-dialog/state/add-branch-dialog.slice";
import homeReducer from "./area/dashboard/home/state/home.slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    adminBranch: adminBranchReducer,
    rasieQuery: rasieQueryReducer,
    addBranchDialog: addBranchDialogReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
