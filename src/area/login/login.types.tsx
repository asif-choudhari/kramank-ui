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

export type AuthResponse = {
  user: User;
  token: string;
  error: string;
};
