import { getSingleProduct } from "@/api/productApi"
import { useQuery } from "@tanstack/react-query"

const useGetSingleProduct =(id)=>{
    const {data = [],} = useQuery({
        queryKey:["product", id], 
        queryFn:()=>getSingleProduct(id)
        
    })

    return {
     product:data,
    }
}


export default useGetSingleProduct  ;