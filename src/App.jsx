import Banner from "./pages/banner/Banner";
import Navbar from "./pages/navbar/Navbar";
import NewsLetter from "./pages/newsLater/NewsLetter";
import AllCategories from "./pages/products/AllCategories";
import ExploreProducts from "./pages/products/ExploreProducts";
import NewArrivalProucts from "./pages/products/NewArrivalProucts";
import TopSalesProducts from "./pages/products/TopSalesProducts";

function App() {
  return (
    <>
      <Navbar />
      <hr className="my-3 w-full" />
      <Banner />
      <TopSalesProducts />
      <AllCategories />
       <NewArrivalProucts />
      <ExploreProducts />
      <NewsLetter/>
     
    </>
  );
}

export default App;
