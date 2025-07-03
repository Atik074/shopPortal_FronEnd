import Banner from "./pages/banner/Banner";
import Footer from "./pages/footer/Footer";
import Navbar from "./pages/navbar/Navbar";
import NewsLetter from "./pages/newsLater/NewsLetter";
import AllCategories from "./pages/products/AllCategories";
import ExploreProducts from "./pages/products/ExploreProducts";
import NewArrivalProucts from "./pages/products/NewArrivalProucts";
import TopSalesProducts from "./pages/products/TopSalesProducts";
import Testimonial from "./pages/testimonial/Testimonial";
import FavProductProvider from "./providers/FavProductProvider";
import { ProductProvider } from "./providers/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <FavProductProvider>

   
        <Navbar />
      <hr className="my-3 w-full" />
     <div className="main">
     <Banner />
      <TopSalesProducts />
      <AllCategories />
       <NewArrivalProucts />
      <ExploreProducts />
      <NewsLetter/>
      <Testimonial/>
      </div>
   
      
      <Footer/>
        </FavProductProvider>
    </ProductProvider>
  );
}

export default App;
