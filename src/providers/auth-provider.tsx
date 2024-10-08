import { PropsWithChildren, useState } from "react";
import { User } from "@/types/user";
import { AuthContext } from "@/contexts/auth-context";

type AuthProviderProps = PropsWithChildren & {
  isLoggedIn: boolean;
};

export function AuthProvider({ children, isLoggedIn }: AuthProviderProps) {
  const [user] = useState<User | null>(
    isLoggedIn
      ? {
          id: "1",
          name: "geekfrontend",
        }
      : null
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
