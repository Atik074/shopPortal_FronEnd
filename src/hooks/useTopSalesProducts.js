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
        data,
         isLoading:{
             state:isLoading ,
             message:isLoading ? "Top sales Product is Loading..." : " "
        }, 
        isError,
        error
    }
  
}
export default useTopSalesProducts ;
