import { addToCart } from "@/api/addToCartApi";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useAddToCart = () => {
    const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addToCart,

    onSuccess: (data) => {
      const isAlreadyInCart = data.message.toLowerCase().includes("already");
        queryClient.invalidateQueries(["cart"]);

      Swal.fire({
        position: "top-end",

        html: `<p style="color:${
          isAlreadyInCart ? "red" : "green"
        }; font-size: ${
          isAlreadyInCart ? "20px" : "24px"
        }; font-weight: bold;">${data.message}</p>`,
        icon: isAlreadyInCart ? "warning" : "success",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  return {
    addToCart: mutate,
  };
};

export default useAddToCart;
