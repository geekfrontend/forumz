import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login as loginService, getMe } from "@/services/authService";
import { LoginRequestDTO } from "@/services/authService/dto";
import { User } from "@/types/user";

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
  message: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: null,
  message: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginRequestDTO, { rejectWithValue }) => {
    try {
      const response = await loginService(data);
      if (!response) {
        throw new Error("Invalid credentials");
      }
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMe();
      if (!response) {
        throw new Error("Failed to fetch user profile");
      }
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Logging in...";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.token;
        state.isSuccess = true;
        state.message = "Login successful";
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Login failed";
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isLoggedIn = true;
        state.message = "Fetching user profile...";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.message = "User profile fetched successfully";
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoggedIn = false;
        state.message = "Failed to fetch user profile";
      });
  },
});

// Export the logout action
export const { logout } = authSlice.actions;

export default authSlice.reducer;
