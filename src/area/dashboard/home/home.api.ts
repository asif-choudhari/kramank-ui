import axios from "axios";

const url: string = `${import.meta.env.VITE_API_URL}/home`;

export const getConsumptionApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-consumption/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getGeographiesCountApi = async (
  token: string,
  companyId: number
) => {
  const { data } = await axios.get(
    `${url}/get-geographies-count/${companyId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
