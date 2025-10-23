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

export const getCartProducts = async () => {
  try {
    const response = await axiosApi.get("/cart");

    const products = response.data.userCart.products.map((item) => ({
      id: item._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.images,
      quantity: item.quantity,
      stock: item.productId.stock,
    }));

    return products;
  } catch (err) {
    errorHandler(err, "failed to get cart products");
  }
};


export const getCartProduct = async () => {
  try {
    const response = await axiosApi.get("/cart");


    const products = response.data.userCart.products.map((item) => ({
      id: item._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.images,
      quantity: item.quantity,
    }));

    return products;
  } catch (err) {
    errorHandler(err, "failed to get cart products");
  }
};