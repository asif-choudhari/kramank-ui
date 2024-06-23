import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryType, SubmitQueryApiType } from "../rasie-query.types";
import { getOpenQueriesApi, postQueryApi } from "../raise-query.api";
import { ApiPayload } from "@/area/common/ApiPayload.type";

export const getOpenQueriesThunk = createAsyncThunk<QueryType[], ApiPayload>(
  "rasie-query/getOpenQueries",
  async ({ token, companyId }) => {
    const response = await getOpenQueriesApi(token, companyId);
    return response;
  }
);

export const postQueryThunk = createAsyncThunk<void, SubmitQueryApiType>(
  "raise-query/submitQuery",
  async ({ token, companyId, query }) => {
    await postQueryApi(token, companyId, query);
  }
);

type RasieQueryStateType = {
  openQueries: QueryType[];
};

const initialState: RasieQueryStateType = {
  openQueries: [],
};

const rasieQuerySlice = createSlice({
  name: "rasieQuerySlice",
  initialState,
  reducers: {
    setopenQueries: (state, action) => {
      state.openQueries = action.payload;
    },
  },
});

export const { setopenQueries } = rasieQuerySlice.actions;

export default rasieQuerySlice.reducer;
