import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsListApi } from "../products.api";
import { ApiPayload } from "@/area/common/ApiPayload.type";
import { ProductListItem } from "../products.types";

export const getProudctsListThunk = createAsyncThunk<
  ProductListItem[],
  ApiPayload
>("products/getProdcutsList", async ({ token, securityRights }) => {
  const response = await getProductsListApi(token, securityRights || "");
  return response;
});

type ProductsSliceType = {
  productsList: ProductListItem[];
};

const initialState: ProductsSliceType = {
  productsList: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProdcutsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProdcutsList } = ProductsSlice.actions;

export default ProductsSlice.reducer;
