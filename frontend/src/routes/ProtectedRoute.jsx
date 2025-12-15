import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

const ProtectedRoute = ({ children, role }) => {
  const auth = getAuth();

  if (!auth) return <Navigate to="/" />;
  if (role && auth.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
