import axios from "axios";

export const authorize = async (token: string): Promise<boolean> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/authorize`,
    {
      token,
    }
  );

  return response.status === 204;
};
