import useNewArrivalsProducts from "@/hooks/useNewArrivalsProducts";
import ProductCard from "./ProductCard";
import Loader from "@/components/Loader";

const NewArrivalProucts = () => {
  const { newProducts, isLoading, isError, error } = useNewArrivalsProducts();

  if (isError) {
    return <p>Error: {error?.message || "New arrivals Products error"}</p>;
  }

  return (
    <div className="my-28">
      <h2 className="text-red-500 text-3xl font-medium text-center mb-3">
        Our New Arrival Products
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12 mx-[16%]">
        Fresh styles just dropped! Discover the latest arrivals designed to keep
        your wardrobe on point. From bold trends to everyday essentials — shop
        what’s new now.
      </p>
      <div className="grid grid-cols-4   p-4 gap-5">
        {isLoading.state ? 
          
             <Loader msg={isLoading.message}/> : (
          newProducts.map((newProduct) => (
            <ProductCard 
            key={newProduct._id} 
  
            product={newProduct} 
             isTopSales = {false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewArrivalProucts;
