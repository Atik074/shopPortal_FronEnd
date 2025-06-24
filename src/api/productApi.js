import axiosApi from "./axiosApi";



export const getProducts =async()=>{
  
 const response = await axiosApi.get('/')
  return response?.data?.products;

}

export const getNewArrivalsProducts =async()=>{
 const response = await axiosApi.get('/new-arrivals')
  return response?.data?.products;

}

getNewArrivalsProducts()
