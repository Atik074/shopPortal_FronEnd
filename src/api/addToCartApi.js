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

    console.log(response.data.userCart.products);

    console.log(response.data.userCart.products.map((item) => ({
  
      image: item.productId.images.map(item =>item)

     
    })))

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
