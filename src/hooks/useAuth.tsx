import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useAuth = () => {
  const { isLoggedIn, user, token, message, isLoading, isError, isSuccess } =
    useSelector((state: RootState) => state.auth);

  return {
    isLoggedIn,
    user,
    token,
    message,
    isLoading,
    isError,
    isSuccess,
  };
};
