import Banner from "./pages/banner/Banner";
import Navbar from "./pages/navbar/Navbar";
import AllCategories from "./pages/products/AllCategories";
import NewArrivalProucts from "./pages/products/NewArrivalProucts";
import PopularProducts from "./pages/products/PopularProducts";

function App() {
  return (
    <>
      <Navbar />
      <hr className="my-3 w-full" />
      <Banner />
      <AllCategories />
      <PopularProducts/>
      <NewArrivalProucts/>
    </>
  );
}

export default App;
