import errorHandler from "@/lib/errorHandler";
import { replaceMongoIdArray, replaceMongoIdObj } from "@/lib/idConverter";
import axiosApi from "./axiosApi";

export const getProducts = async () => {
  try {
    const response = await axiosApi.get("/products");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    errorHandler(err, "fetch failed in get products");
  }
};

export const getNewArrivalsProducts = async () => {
  try {
    const response = await axiosApi.get("/products/new-arrivals");

    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    errorHandler(err, "fetched failed in new arival products fetched failed");
  }
};

export const getTopSalesProducts = async () => {
  try {
    const response = await axiosApi.get("/products/top-sales");
    return replaceMongoIdArray(response?.data?.products);
  } catch (err) {
    errorHandler(err, "fetched failed in top sales products ");
  }
};

export const getSingleProduct = async (slug) => {
  console.log(slug);

  try {
    const response = await axiosApi.get(`/product/${slug}`);

    return replaceMongoIdObj(response?.data?.product);
  } catch (err) {
    errorHandler(err, "fetched failed in get single product");
  }
};
