import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getConsumptionApi, getGeographiesCountApi } from "../home.api";
import { ApiPayload } from "@/area/common/ApiPayload.type";
import {
  ConsumptionApiResponse,
  GeographiesCountApiResponse,
} from "../home.types";

export const getConsumptionThunk = createAsyncThunk<
  ConsumptionApiResponse,
  ApiPayload
>("admin-branch/getAdminCount", async ({ token, companyId }) => {
  const response = await getConsumptionApi(token, companyId);
  return response;
});

export const getGeographiesCountThunk = createAsyncThunk<
  GeographiesCountApiResponse,
  ApiPayload
>("admin-branch/getAdminCount", async ({ token, companyId }) => {
  const response = await getGeographiesCountApi(token, companyId);
  return response;
});

type HomeSliceType = {
  branchCount: number;
  geographiesCount: number;
  usedAmount: number;
  unusedAmount: number;
  averageConsumption: number;
};

const initialState: HomeSliceType = {
  branchCount: 0,
  geographiesCount: 0,
  usedAmount: 0,
  unusedAmount: 0,
  averageConsumption: 0,
};

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    setBranchCount: (state, action) => {
      state.branchCount = action.payload.branchCount;
    },
    setGeographiesCount: (state, action) => {
      state.geographiesCount = action.payload.geographiesCount;
    },
    setConsumption: (state, action) => {
      state.unusedAmount = action.payload.unusedAmount;
      state.usedAmount = action.payload.usedAmount;
      state.averageConsumption = action.payload.averageConsumption;
    },
  },
});

export const { setBranchCount, setGeographiesCount, setConsumption } =
  HomeSlice.actions;

export default HomeSlice.reducer;
