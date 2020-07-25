import { axiosInstance } from "./axiosInstance";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/users/login", {
    email,
    password,
  });
};
