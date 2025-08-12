import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/home/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Checkout from "@/pages/checkout/Checkout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AuthProtectedRoute from "./AuthProtectedRoute";
import Dashboard from "@/pages/dashboard/Dashboard";
import SingleProduct from "@/pages/products/singleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'checkout',
        element:<Checkout/>
      },
      {
        path:'dashboard',
        element:<AuthProtectedRoute>
               <Dashboard/>
        </AuthProtectedRoute>  
      },
      {
        path:'admin-dashboard',
        element: <AdminProtectedRoute>
               <AdminDashboard/>
        </AdminProtectedRoute>  
      },
      {
        path:'/products/:slug',
        element:<SingleProduct/> 
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
