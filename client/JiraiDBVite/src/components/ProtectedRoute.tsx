import { useEffect, useState, type ReactNode } from "react";
import { isAuthenticated } from "../utils/authenticationServices";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      isAuthenticated().then((status) => {
        if (status == 200) {
          setAuthenticated(true);
        } else if (status === 401) {
          setAuthenticated(false);
        } else {
          setAuthenticated(false);
        }
      });
    };

    fetchAuthStatus();
  }, []);

  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/Login" replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
