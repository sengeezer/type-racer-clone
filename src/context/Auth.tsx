import { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { firebase, getFirebaseAuth, isFirebaseConfigured } from "firedb";

interface AuthValues {
  user: firebase.User | null | undefined;
  isLoading: boolean;
  error: firebase.auth.Error | Error | undefined;
}

const AuthContext = createContext<AuthValues>({} as AuthValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<AuthValues>({
    user: null,
    isLoading: isFirebaseConfigured,
    error: undefined,
  });

  useEffect(() => {
    if (!isFirebaseConfigured) {
      return;
    }

    try {
      const auth = getFirebaseAuth();
      const unsubscribe = auth.onAuthStateChanged(
        user => {
          setValue({
            user,
            isLoading: false,
            error: undefined,
          });
        },
        error => {
          setValue({
            user: null,
            isLoading: false,
            error,
          });
        }
      );

      return unsubscribe;
    } catch (error) {
      console.error("Authentication failed.", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
