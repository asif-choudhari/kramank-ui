export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthorizePayload = {
  token: string;
};

export type LoginApiResponse = {
  user: User;
  token: string;
  error: string;
};

export type AuthorizeApiResponse = {
  firstName: string;
  lastName: string;
  email: string;
};
