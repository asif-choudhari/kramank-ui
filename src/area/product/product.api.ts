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

export const getProductFeedbackApi = async (
  token: string,
  productId: number
) => {
  const { data } = await axios.get(`${url}/get-product-feedback/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addFeedbackApi = async (
  token: string,
  productId: number,
  rating: number,
  title: string,
  description: string
) => {
  const { data } = await axios.post(
    `${url}/insert-product-feedback`,
    {
      productId,
      rating,
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
