import axios from "axios";

const url: string = `${import.meta.env.VITE_API_URL}/add-branch`;

export const postAddNewBranchApi = async (
  token: string,
  companyId: number,
  branchName: string,
  isNewAdmin: boolean,
  adminUserId: number,
  adminFirstName: string,
  adminLastName: string,
  adminEmail: string,
  adminMobile: string,
  address: string,
  state: string
) => {
  await axios.post(
    url,
    {
      companyId,
      branchName,
      isNewAdmin,
      adminUserId,
      adminFirstName,
      adminLastName,
      adminEmail,
      adminMobile,
      address,
      state,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
