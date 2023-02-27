import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContextType } from "../interface";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [token, setToken] = useState<string | undefined>(
    window.localStorage.getItem("token") as string
  );
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Logout user and remove token from storage
   */
  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(undefined);
  };

  // Make the provider update only when it should
  const memoedUser = useMemo(
    () => ({
      token,
      logout,
      setToken,
      loading,
    }),
    // eslint-disable-next-line
    [token]
  );

  useEffect(() => {
    if (window.localStorage.token) {
      setLoading(true);
      const setAuthToken = () => {
        try {
          if (window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token") || "");
          }
          setLoading(false);
        } catch (error) {
          console.log("Something went wrong!");
        } finally {
          setLoading(false);
        }
      };
      setAuthToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.token]);

  return (
    <AuthContext.Provider value={memoedUser as AuthContextType}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
