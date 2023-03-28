import { OpenAPI } from "../services";

export const configApi = () => {
  OpenAPI.BASE = import.meta.env.VITE_API_URL;
  OpenAPI.TOKEN = getToken;
};

const getToken = async () => {
  return localStorage.getItem("accessToken") ?? "";
};
