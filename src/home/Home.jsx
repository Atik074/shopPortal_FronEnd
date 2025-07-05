import Banner from "../pages/banner/Banner";
import NewsLetter from "../pages/newsLater/NewsLetter";
import AllCategories from "../pages/products/AllCategories";
import ExploreProducts from "../pages/products/ExploreProducts";
import NewArrivalProucts from "../pages/products/NewArrivalProucts";
import TopSalesProducts from "../pages/products/TopSalesProducts";
import Testimonial from "../pages/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="main">
      <Banner />
      <TopSalesProducts />
      <AllCategories />
      <NewArrivalProucts />
      <ExploreProducts />
      <NewsLetter />
      <Testimonial />
    </div>
  );
};

export default Home;
