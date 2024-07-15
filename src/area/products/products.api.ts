import axios from "axios";

const url: string = `${import.meta.env.VITE_API_URL}/products`;

export const getProductsListApi = async (
  token: string,
  securityRights: string
) => {
  const { data } = await axios.get(
    `${url}/get-products-list/${
      securityRights.toLocaleLowerCase() == "hq" ? 1 : 0
    }`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
