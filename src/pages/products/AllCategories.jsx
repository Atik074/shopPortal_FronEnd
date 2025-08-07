import { useState } from "react";
import { useProducts } from "../../hooks";
import Loader from "@/components/Loader";
import ErrorMsg from "@/components/ErrorMsg";

const AllCategories = () => {
  const { products, isLoading, isError, error } = useProducts();
  const [count, setCount] = useState(6);

  const handleProductCategories = () => {
    setCount((prev) => prev + 2);
  };

   if (isError) {
    return <ErrorMsg msg={error?.message}/>
  }

  return (
    <div className="my-28">
      <h2 className="text-red-500 text-3xl font-medium text-center mb-2">
        Browse Fashion by Category{" "}
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12">
        Explore fashionism categorized by woman,man and kids or latest fashion
        vibe
      </p>

      <div className="grid grid-cols-4  gap-y-8">
        {isLoading.state ? (
          <Loader msg={isLoading.message} />
        ) : (
          products.slice(0, count).map((product) => (
            <div
              key={product.id}
              className="w-[220px] 
        h-[80px] border-y-2 border-gray-300 shadow-md shadow-blue-400 rounded text-center  mx-auto p-4"
            >
              <h3 className="text-xl font-medium capitalize">
                {product.category}
              </h3>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={handleProductCategories}
          disabled={count >= products.length}
          className={`bg-sky-800 text-white px-12 py-3 text-[20px] rounded transition ${
            count >= products.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-sky-700"
          }`}
        >
          {" "}
          See all{" "}
        </button>
      </div>
    </div>
  );
};

export default AllCategories;
