import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase } from "firedb";

interface AuthValues {
  user: firebase.User | null | undefined;
  isLoading: boolean;
  error: firebase.auth.Error | undefined;
}

const AuthContext = createContext<AuthValues>({} as AuthValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, isLoading, error] = useAuthState(firebase.auth());

  return (
    <AuthContext.Provider value={{ user, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
