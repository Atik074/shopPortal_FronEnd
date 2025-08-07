import ErrorHandler from "@/lib/ErrorHandler";
import axiosApi from "./axiosApi";

export const addToCart = async ({ id, quantity }) => {
  try {
    const response = await axiosApi.post("/cart/add", {
      productId: id,
      quantity,
    });

    return response.data;
  } catch (err) {
    ErrorHandler(err, "failed to fetch add to cart");
  }
};
