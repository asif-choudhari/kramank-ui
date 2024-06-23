import axios from "axios";
import { QueryType } from "./rasie-query.types";

const url: string = `${import.meta.env.VITE_API_URL}/raise-query`;

export const getOpenQueriesApi = async (token: string, companyId: number) => {
  const { data } = await axios.get(`${url}/get-open-queries/${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const postQueryApi = async (
  token: string,
  companyId: number,
  query: QueryType
) => {
  await axios.post(
    `${url}/add-query`,
    { companyId, query },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
