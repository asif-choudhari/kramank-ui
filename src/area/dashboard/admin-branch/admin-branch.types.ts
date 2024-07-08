import { ApiPayload } from "@/area/common/ApiPayload.type";

export type AdminType = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

export type BranchType = {
  branchId: number;
  branchName: string;
  address: string;
  companyName: string;
  userFirstName: string;
  userLastName: string;
};

export type AdminBranchRelationshipType = {
  firstName: string;
  lastName: string;
  email: string;
  branches: {
    branchId: number;
    branchName: string;
  }[];
};

export type AdminCountApiResposne = {
  adminCount: number;
};

export type BranchCountApiResposne = {
  branchCount: number;
};

export type setBranchAdminPayload = ApiPayload & {
  userId: number;
  branchId: number;
};
