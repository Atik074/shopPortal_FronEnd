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
       data ,
        isLoading:{
             state:isLoading ,
             message:isLoading ? "Product data is Loading..." : " "
        },
        isError,
        error
        
    }



}

export default useProducts ;