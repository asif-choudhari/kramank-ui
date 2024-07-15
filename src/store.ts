import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "@/area/login/state/login.slice";
import adminBranchSlice from "@/area/dashboard/admin-branch/state/admin-branch.slice";
import rasieQuerySlice from "@/area/dashboard/raise-query/state/rasie-query.slice";
import addBranchDialogSlice from "@/area/dashboard/add-branch-dialog/state/add-branch-dialog.slice";
import homeSlice from "./area/dashboard/home/state/home.slice";
import productsSlice from "./area/products/state/products.slice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    adminBranch: adminBranchSlice,
    rasieQuery: rasieQuerySlice,
    addBranchDialog: addBranchDialogSlice,
    home: homeSlice,
    prodcuts: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
