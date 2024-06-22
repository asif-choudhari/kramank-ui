import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAdminBranchRelationshipApi,
  getAdminCountApi,
  getAdminListApi,
  getBranchCountApi,
  getBranchListApi,
  setBranchAdminApi,
} from "../admin-branch.api";
import {
  AdminBranchRelationshipType,
  AdminCountApiResposne,
  AdminType,
  BranchCountApiResposne,
  BranchType,
  setBranchAdminPayload,
} from "../admin-branch.types";
import { ApiPayload } from "@/area/common/ApiPayload.type";

export const getAdminCountThunk = createAsyncThunk<
  AdminCountApiResposne,
  ApiPayload
>("admin-branch/getAdminCount", async ({ token, companyId }) => {
  const response = await getAdminCountApi(token, companyId || -1);
  return response;
});

export const getBranchCountThunk = createAsyncThunk<
  BranchCountApiResposne,
  ApiPayload
>("admin-branch/getBranchCount", async ({ token, companyId }) => {
  const response = await getBranchCountApi(token, companyId);
  return response;
});

export const getAdminBranchRelationshipThunk = createAsyncThunk<
  AdminBranchRelationshipType[],
  ApiPayload
>("admin-branch/getRealationship", async ({ token, companyId }) => {
  const response = await getAdminBranchRelationshipApi(token, companyId);
  return response;
});

export const getAdminListThunk = createAsyncThunk<AdminType[], ApiPayload>(
  "admin-branch/getAdminList",
  async ({ token, companyId }) => {
    const response = await getAdminListApi(token, companyId);
    return response;
  }
);

export const getBranchListThunk = createAsyncThunk<BranchType[], ApiPayload>(
  "admin-branch/getBranchList",
  async ({ token, companyId }) => {
    const response = await getBranchListApi(token, companyId);
    return response;
  }
);

export const setBranchAdminThunk = createAsyncThunk<
  void,
  setBranchAdminPayload
>("admin-branch/setBranchAdmin", async ({ token, userId, branchId }) => {
  await setBranchAdminApi(token, userId, branchId);
});

type AdminBranchState = {
  adminCount: number;
  isAdminCountApiLoading: boolean;
  isAdminCountApiError: string;
  branchCount: number;
  isBranchCountApiLoading: boolean;
  isBranchCountApiError: string;
  relationshipList: AdminBranchRelationshipType[];
  isRealtionshipApiLoading: boolean;
  isRelationshipApiError: string;
  adminList: AdminType[];
  isAdminListApiLoading: boolean;
  isAdminListApiError: string;
};

const initialState: AdminBranchState = {
  adminCount: 0,
  isAdminCountApiLoading: false,
  isAdminCountApiError: "",
  branchCount: 0,
  isBranchCountApiLoading: false,
  isBranchCountApiError: "",
  relationshipList: [],
  isRealtionshipApiLoading: false,
  isRelationshipApiError: "",
  adminList: [],
  isAdminListApiLoading: false,
  isAdminListApiError: "",
};

const adminBranchSlice = createSlice({
  name: "adminBranchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminCountThunk.pending, (state) => {
        state.isAdminCountApiLoading = true;
        state.isAdminCountApiError = "";
      })
      .addCase(getAdminCountThunk.fulfilled, (state, action) => {
        state.adminCount = action.payload.adminCount;
        state.isAdminCountApiLoading = false;
      })
      .addCase(getAdminCountThunk.rejected, (state) => {
        state.isAdminCountApiError = "Could not fetch admin count";
        state.isAdminCountApiLoading = false;
      })
      .addCase(getBranchCountThunk.pending, (state) => {
        state.isBranchCountApiLoading = true;
        state.isBranchCountApiError = "";
      })
      .addCase(getBranchCountThunk.fulfilled, (state, action) => {
        state.branchCount = action.payload.branchCount;
        state.isBranchCountApiLoading = false;
      })
      .addCase(getBranchCountThunk.rejected, (state) => {
        state.isBranchCountApiError = "Could not fetch branch count";
        state.isBranchCountApiLoading = false;
      })
      .addCase(getAdminBranchRelationshipThunk.pending, (state) => {
        state.isRealtionshipApiLoading = true;
        state.isRelationshipApiError = "";
      })
      .addCase(getAdminBranchRelationshipThunk.fulfilled, (state, action) => {
        state.relationshipList = action.payload;
        state.isRealtionshipApiLoading = false;
      })
      .addCase(getAdminBranchRelationshipThunk.rejected, (state) => {
        state.isRelationshipApiError =
          "Could not fetch Admin - Branch Relationships";
        state.isRealtionshipApiLoading = false;
      })
      .addCase(getAdminListThunk.pending, (state) => {
        state.isAdminListApiLoading = true;
        state.isAdminListApiError = "";
      })
      .addCase(getAdminListThunk.fulfilled, (state, action) => {
        state.adminList = action.payload;
        state.isAdminListApiLoading = false;
      })
      .addCase(getAdminListThunk.rejected, (state) => {
        state.isAdminListApiError = "Could not fetch Admin List";
        state.isAdminListApiLoading = false;
      });
  },
});

export default adminBranchSlice.reducer;
