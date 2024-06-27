import { RootState } from "@/store";

export const branchCountSelector = (state: RootState) => state.home.branchCount;

export const geographiesCountSelector = (state: RootState) =>
  state.home.geographiesCount;

export const usedAmountSelector = (state: RootState) => state.home.usedAmount;

export const unusedAmountSelector = (state: RootState) =>
  state.home.unusedAmount;

export const averageConsumptionSelector = (state: RootState) =>
  state.home.averageConsumption;
