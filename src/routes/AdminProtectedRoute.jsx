import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));


   if (!auth?.token) {
    return <Navigate to="/login" />;
  }

  if (auth?.user?.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

export default AdminProtectedRoute;
