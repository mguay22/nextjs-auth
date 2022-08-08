import client from "../constants/apollo-client";
import authenticatedVar from "../constants/authenticated";
import { API_URL } from "../constants/urls";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const login = async (body: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    client.refetchQueries({ include: "active" });
    authenticatedVar(true);
  };

  return { login };
};
