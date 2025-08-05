import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

   if (!token) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

export default AdminProtectedRoute;
