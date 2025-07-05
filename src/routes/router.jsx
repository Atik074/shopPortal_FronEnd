import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/home/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Checkout from "@/pages/checkout/Checkout";

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
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
