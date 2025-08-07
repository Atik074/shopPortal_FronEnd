import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";


const useProducts =()=>{
     const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  
    return {
     products:data,
    isLoading,
    isError,
    error,
        
    }



}

export default useProducts ;