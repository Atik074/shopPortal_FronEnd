import { getTopSalesProducts } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";



const useTopSalesProducts =()=> {
    const {
        data = [],
        isLoading ,
        isError,
        error
    }  = useQuery({
        queryKey:["topSales"],
        queryFn:getTopSalesProducts
    })


    return {
     TopSalesProducts: data,
    isLoading,
    isError,
    error,
    }
  
}
export default useTopSalesProducts ;
