import { replaceMongoIdArray } from "@/lib/idConverter";
import axiosApi from "./axiosApi";
import handleError from "@/lib/handleError";

export const getProducts = async () => {
  try {
    const response = await axiosApi.get("/products");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    handleError(err, "error in get products  fetch failed");
     return []
  }
};

export const getNewArrivalsProducts = async () => {
  try {
    const response = await axiosApi.get("/products/new-arrivals");

    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    handleError(err, "error in new arival products fetched failed");
     return []
  }
};

export const getTopSalesProducts = async () => {
  try {
    const response = await axiosApi.get("/products/top-sales");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    handleError(err, "error in top sales products fetched failed");
     return [] ;
  }
};
