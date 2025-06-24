import useNewArrivalsProducts from "@/hooks/useNewArrivalsProducts";
import ProductCard from "./ProductCard";

const NewArrivalProucts = () => {
     const{newProducts, isLoading, isError, error} = useNewArrivalsProducts()

      if (isLoading.state) {
    return <p>{isLoading.message}</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || "New arrivals Products error"}</p>;
  }


    return (
        <div className="my-28">
              <h2 className="text-red-500 text-3xl font-medium text-center mb-2">
        Our New Arrival Products
      </h2>
      <p className="text-[18px] text-gray-600 text-center mb-12">
        New Arrival Products is demandable everywhere to organised or to be smart
        ownself
      </p>
            <div className="grid grid-cols-4   p-4 gap-5">
               {
              newProducts.map(newProduct =><ProductCard 
                key={newProduct._id}
                product={newProduct}
                 />)
             }
            </div>
       
        </div>
    );
};

export default NewArrivalProucts;