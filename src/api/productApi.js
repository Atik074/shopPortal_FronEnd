import axiosApi from "./axiosApi";



export const getProducts =async()=>{
  
 const response = await axiosApi.get('/products')
  return response?.data?.products;

}

export const getNewArrivalsProducts =async()=>{
 const response = await axiosApi.get('/products/new-arrivals')
  return response?.data?.products;

}

export const getTopSalesProducts =async()=>{
  const response = await axiosApi.get('/products/top-sales')
    return response?.data?.products
}
