import { getNewArrivalsProducts } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";

const useNewArrivalsProducts = () => {
     const {
        data = [],
        isLoading,
        isError,
        error

     }= useQuery({
        queryKey:["newArrivals"],
        queryFn:getNewArrivalsProducts
     })


     return {
      newProducts : data, 
      isLoading,
      isError,
     error,
     }
};


export default useNewArrivalsProducts;