import { ApiPayload } from "@/area/common/ApiPayload.type";

export type QueryType = {
  queryId?: number;
  companyId?: number;
  type: number;
  title: string;
  description: string;
  status: string;
};

export type SubmitQueryApiType = ApiPayload & {
  query: QueryType;
};
