import Footer from "@/pages/footer/Footer";
import Navbar from "@/pages/navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
          <>
          <Navbar />
          <Outlet/>
        <Footer />
          </>
        
      
  );
};

export default MainLayout;
