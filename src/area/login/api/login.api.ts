import axios from "axios";

export const loginUserApi = async (email: string, password: string) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    {
      email,
      password,
    }
  );
  return data;
};

export const authorizeUserApi = async (token: string) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
