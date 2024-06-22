import axios from "axios";

const url: string = `${import.meta.env.VITE_API_URL}/admin-branch`;

export const getAdminCountApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-admin-count/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getBranchCountApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-branch-count/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getAdminBranchRelationshipApi = async (
  token: string,
  companyId: number
) => {
  const { data } = await axios.get(
    `${url}/get-admin-branch-relationship/${companyId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const getAdminListApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-admin-list/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getBranchListApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-branch-list/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const setBranchAdminApi = async (
  token: string,
  userId: number,
  branchId: number
) => {
  await axios.post(
    `${url}/set-branch-admin`,
    { userId, branchId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
