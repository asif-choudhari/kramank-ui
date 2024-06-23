import { RootState } from "@/store";

export const openQueriesSelector = (state: RootState) =>
  state.rasieQuery.openQueries;
