import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminType } from "../../admin-branch/admin-branch.types";
import { AddNewBranchPayload } from "../add-branch-dialog.types";
import { postAddNewBranchApi } from "../add-branch-dialog.api";

export const AddNewBranchThunk = createAsyncThunk<void, AddNewBranchPayload>(
  "admin-branch/getAdminCount",
  async ({
    token,
    companyId,
    branchName,
    isNewAdmin,
    adminUserId,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminMobile,
    address,
    state,
  }: AddNewBranchPayload) => {
    await postAddNewBranchApi(
      token,
      companyId,
      branchName,
      isNewAdmin,
      adminUserId,
      adminFirstName,
      adminLastName,
      adminEmail,
      adminMobile,
      address,
      state
    );
  }
);

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
