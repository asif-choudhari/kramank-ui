import axios from "axios";

const url: string = `${import.meta.env.VITE_API_URL}/products`;

export const getProductDetailsApi = async (
  token: string,
  productId: number
) => {
  const { data } = await axios.get(`${url}/get-product-details/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getProductOptionsApi = async (
  token: string,
  productId: number
) => {
  const { data } = await axios.get(`${url}/get-product-options/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getProductImagesApi = async (token: string, productId: number) => {
  const { data } = await axios.get(`${url}/get-product-images/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
