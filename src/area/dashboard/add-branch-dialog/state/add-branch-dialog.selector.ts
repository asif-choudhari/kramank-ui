import { RootState } from "@/store";

export const adminListSelector = (state: RootState) =>
  state.addBranchDialog.adminList;
