import { createSlice } from "@reduxjs/toolkit";
import { AdminType } from "../../admin-branch/admin-branch.types";

type AddBranchDialogSliceType = {
  adminList: AdminType[];
};

const initialState: AddBranchDialogSliceType = {
  adminList: [],
};

const addBranchDialogSlice = createSlice({
  name: "addBranchDialogSlice",
  initialState,
  reducers: {
    setAdminList: (state, action) => {
      state.adminList = action.payload;
    },
  },
});

export const { setAdminList } = addBranchDialogSlice.actions;

export default addBranchDialogSlice.reducer;
