export type AddNewBranchPayload = {
  token: string;
  companyId: number;
  branchName: string;
  isNewAdmin: boolean;
  adminUserId: number;
  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminMobile: string;
  address: string;
  state: string;
};
