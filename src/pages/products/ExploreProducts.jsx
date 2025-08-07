import { useAddToCart,  useFavCart, useProducts } from "@/hooks";
import {  useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "@/components/Loader";
import ErrorMsg from "@/components/ErrorMsg";



const ExploreProducts = () => {
  // const { addToCart } = useCart();
  const { isFav,  toggleFavItem} = useFavCart();
  const { products, isLoading, isError, error } = useProducts();
  const { addToCart } = useAddToCart();

  const [count, setCount] = useState(4);



  //handle See AllProducts
  const handleSeeAllProducts = () => {
    setCount((prev) => prev + 4);
  };

 
 

  //show error
  if (isError) {
    return <ErrorMsg msg={error?.message}/>
  }

  return (
    <div>
      <h2 className="text-red-500 text-3xl font-medium text-center mb-3">
        Discover Your Look
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12 mx-[16%]">
        Discover the perfect blend of trend and elegance with our latest fashion
        collections.everyday essentials to statement pieces, curated styles that
        speak your personality.
      </p>

      <div className="grid grid-cols-4   p-4 gap-5 ">
        {isLoading.state ? (
          <Loader msg={isLoading.message} />
        ) : (
          products
            .slice(0, count)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isTopSales={false}
                onAddToCart={addToCart}
               isFav={isFav}
                onAddToFav={toggleFavItem}
              />
            ))
        )}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleSeeAllProducts}
          disabled={count >= products.length}
          className={`bg-sky-800 text-white px-12 py-3 text-[20px] rounded transition ${
            count >= products.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-sky-700"
          }`}
        >
          See all
        </button>
      </div>
    </div>
  );
};

export default ExploreProducts;
