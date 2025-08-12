import errorHandler from "@/lib/errorHandler";
import axiosApi from "./axiosApi";

export const addToCart = async ({ id, quantity }) => {
  try {
    const response = await axiosApi.post("/cart/add", {
      productId: id,
      quantity,
    });

    return response.data;
  } catch (err) {
    errorHandler(err, "failed to fetch add to cart");
  }
};
