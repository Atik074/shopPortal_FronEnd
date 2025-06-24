import { useProducts } from "@/hooks";
import { useState } from "react";
import ProductCard from "./ProductCard";
const PopularProducts = () => {
  const { data:products, isLoading, isError, error } = useProducts();
  const [count, setCount] = useState(4);

  if (isLoading.state) {
    return <p>{isLoading.message}</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong"}</p>;
  }

  const handleSeeAllProducts = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <div>
      <h2 className="text-red-500 text-3xl font-medium text-center mb-2">
        Our Popular Fashion{" "}
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12">
        Popular fashion is demandable everywhere to organised or to be smart
        ownself
      </p>

      <div className="grid grid-cols-4   p-4 gap-5 ">
        {products.slice(0, count).map((product) =><ProductCard 
        key={product._id} 
        product={product}
       
        />)}
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

export default PopularProducts;
