import { Navigate } from "react-router-dom";

const AuthProtectedRoute = ({children}) => {
    const auth =JSON.parse(localStorage.getItem("auth"))

    if(!auth?.token) return <Navigate to="/login" />;
    return children
};

export default AuthProtectedRoute;