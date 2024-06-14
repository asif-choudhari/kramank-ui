export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  error: string;
}
