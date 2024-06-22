import { RootState } from "@/store";

export const adminCountSelector = (state: RootState) =>
  state.adminBranch.adminCount;

export const isAdminCountApiLoadingSelector = (state: RootState) =>
  state.adminBranch.isAdminCountApiLoading;

export const isAdminCountApiErrorSelector = (state: RootState) =>
  state.adminBranch.isAdminCountApiError;

export const branchCountSelector = (state: RootState) =>
  state.adminBranch.branchCount;

export const isBranchCountApiLoadingSelector = (state: RootState) =>
  state.adminBranch.isBranchCountApiLoading;

export const isBranchCountApiErrorSelector = (state: RootState) =>
  state.adminBranch.isBranchCountApiError;

export const relationshipListSelector = (state: RootState) =>
  state.adminBranch.relationshipList;

export const isRelationshipApiLoadingSelector = (state: RootState) =>
  state.adminBranch.isRealtionshipApiLoading;

export const isRelationshipApiErrorSelector = (state: RootState) =>
  state.adminBranch.isRelationshipApiError;

export const adminListSelector = (state: RootState) =>
  state.adminBranch.adminList;

export const isAdminListApiLoadingSelector = (state: RootState) =>
  state.adminBranch.isAdminListApiLoading;

export const isAdminListApiErrorSelector = (state: RootState) =>
  state.adminBranch.isAdminListApiError;
