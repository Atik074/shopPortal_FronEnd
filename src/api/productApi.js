
import { replaceMongoIdArray } from "@/lib/idConverter";
import axiosApi from "./axiosApi";
import ErrorHandler from "@/lib/ErrorHandler";

export const getProducts = async () => {
  try {
    const response = await axiosApi.get("/products");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
  
    ErrorHandler(err, "fetch failed in get products");
  }
};

export const getNewArrivalsProducts = async () => {
  try {
    const response = await axiosApi.get("/products/new-arrivals");

    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    ErrorHandler(err, "fetched failed in new arival products fetched failed");
  }
};

export const getTopSalesProducts = async () => {
  try {
    const response = await axiosApi.get("/products/top-sales");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    ErrorHandler(err, "fetched failed in top sales products ");
  }
};

export const getSingleProduct =async(id)=>{
   try {
    const response = await axiosApi.get(`/products/${id}`);
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    ErrorHandler(err, "fetched failed in get single product");
  }
}
