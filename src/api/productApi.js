import { replaceMongoIdArray } from "@/lib/idConverter";
import axiosApi from "./axiosApi";



export const getProducts =async()=>{
  
 const response = await axiosApi.get('/products')
 return replaceMongoIdArray(response?.data?.products) 


}

export const getNewArrivalsProducts =async()=>{
 const response = await axiosApi.get('/products/new-arrivals')
  return replaceMongoIdArray(response?.data?.products) 

}

export const getTopSalesProducts =async()=>{
  const response = await axiosApi.get('/products/top-sales')
      return replaceMongoIdArray(response?.data?.products) 
   
     
}


// export const getCartProducts =async(userId ,productId)=>{
//   const response = await axiosApi.get('/cart',
//     {
//         method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ userId, productId })},
//   )

//   console.log(replaceMongoIdArray(response?.data?.products))

//      return replaceMongoIdArray(response?.data?.products) 
// }


