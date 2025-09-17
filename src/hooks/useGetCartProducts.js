import { getCartProducts } from "@/api/addToCartApi"
import { useQuery } from "@tanstack/react-query"

 const  useGetCartProducts =()=>{
  const {data =[] , isLoading, isError,error} =  useQuery({
        queryKey:['getCartProducts'] ,
        queryFn:getCartProducts,
        
       
    })

  return {
     cartProduct:data, 
     isLoading,
      isError,
      error
  }
}

export default useGetCartProducts ;