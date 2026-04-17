import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user && !localStorage.getItem("token")) {
    return <Navigate to="/Auth/login" replace state={{ from: location }} />;
  }
  return children;
}
