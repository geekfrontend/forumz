import api from "../apiService";
import {
  RegisterRequestDTO,
  RegisterResponseDTO,
  LoginRequestDTO,
  LoginResponseDTO,
  GetMeResponseDTO,
} from "./dto";

export const login = async (
  data: LoginRequestDTO
): Promise<LoginResponseDTO | null> => {
  try {
    const response = await api.post<LoginResponseDTO>("/login", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export const register = async (
  data: RegisterRequestDTO
): Promise<RegisterResponseDTO | null> => {
  try {
    const response = await api.post<RegisterResponseDTO>("/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    return null;
  }
};

export const getMe = async (): Promise<GetMeResponseDTO | null> => {
  try {
    const response = await api.get<GetMeResponseDTO>("/users/me");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    return null;
  }
};
