import { ApiResponse } from "@/services/utils";

export interface RegisterRequestDTO {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponseData {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}

export type RegisterResponseDTO = ApiResponse<RegisterResponseData>;

export interface LoginRequestDTO {
  email: string;
  password: string;
}

interface LoginResponseData {
  token: string;
}

export type LoginResponseDTO = ApiResponse<LoginResponseData>;

interface GetMeResponseData {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}

export type GetMeResponseDTO = ApiResponse<GetMeResponseData>;
