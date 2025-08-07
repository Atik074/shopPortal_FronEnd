import useTopSalesProducts from "@/hooks/useTopSalesProducts";
import ProductCard from "./ProductCard";
import Loader from "@/components/Loader";
import { useAddToCart,  useFavCart } from "@/hooks";
import ErrorMsg from "@/components/ErrorMsg";


const TopSalesProducts = () => {
  const {  TopSalesProducts,  isLoading, isError, error,
  } = useTopSalesProducts();
   const { addToCart } = useAddToCart();
    const { isFav,  toggleFavItem} = useFavCart();




   if (isError) {
    return <ErrorMsg msg={error?.message}/>
  }

  return (
    <div className="my-28">
      <h2 className="text-red-500 text-3xl font-medium text-center mb-3 ">
        Our Top-Selling Products
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12 mx-[16%]">
      Discover the most popular items our customers love! These top-selling products are trending now and selling fast—grab yours before they’re gone.
      </p>

      <div className="grid grid-cols-4 p-4 gap-5 ">
        {isLoading.state ? (
          <Loader msg={isLoading.message} />
        ) : (
          TopSalesProducts.map((TopSalesProduct) => (
            <ProductCard 
            key={TopSalesProduct.id}
             product={TopSalesProduct}
               isTopSales = {true}
                 onAddToCart= {addToCart}
                 isFav={isFav}
                onAddToFav={toggleFavItem}
              />
          ))
        )}
      </div>
    </div>
  );
};

export default TopSalesProducts;
