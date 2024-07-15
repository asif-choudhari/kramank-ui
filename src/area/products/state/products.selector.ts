import { RootState } from "@/store";

export const productsListSelector = (state: RootState) =>
  state.prodcuts.productsList;
