import Quantity from "@/components/Quantity";
import { useCart } from "@/hooks";
import useGetCartProducts from "@/hooks/useGetCartProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartModal = ({ setShow }) => {
  const {  removeFromCart } = useCart();
  const { cartProduct } = useGetCartProducts();
  const [products, setProducts] = useState(() => {
    const cartItems = localStorage.getItem("CartItems");
    return cartItems ? JSON.parse(cartItems) : cartProduct;
  });
 



   //save products local staorage to show price by clicking quantity
  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(products));
  }, [products]);


  //handle Total Price In to Cart
  const handleTotalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  console.log(handleTotalPrice)

  return (
    <div className="px-3">
      <div>
        {cartProduct.length === 0 ? (
          <p className="text-[20px] text-center text-white mt-8  rounded font-semibold">
            You haven’t added any products yet
          </p>
        ) : (
          <div className="w-[600px]">
            <h2 className="text-xl mb-4 text-center underline ">
              My Cart Products
            </h2>
            <table className="w-full border-collapse ">
              <thead>
                <tr className="border-b-2 text-[17px] m-3">
                  <th className="text-start ">Image</th>
                  <th className="text-start">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                  <th className="text-right">Remove</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      {product.image.map((img, index) =>
                        index === 0 ? (
                          <img
                            key={img._id}
                            src={img.url}
                            alt={product.name}
                            className="w-10 rounded mt-4"
                          />
                        ) : null
                      )}
                    </td>
                    <td className="text-[16px] truncate max-w-[100px]">
                      {product.name}
                    </td>
                    <td className="text-center text-[16px]">{product.price}</td>

                    <td className="flex items-center justify-center mt-5">
                      <Quantity setProducts={setProducts} product={product} />
                    </td>
                    <td className="text-right text-[16px]">
                      {product.price * product.quantity}
                    </td>
                    <td className="text-center text-xl font-bold ">
                      <button
                        className="cursor-pointer"
                        onClick={() => removeFromCart(product.id)}
                      >
                        {" "}
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>{" "}
          </div>
        )}



 {products.length >= 1 && (
          <div className="flex flex-col ">
            <p className="text-xl text-end mb-4 mt-6 font-semibold text-amber-400 mr-14">
              Total Price : {handleTotalPrice}tk
            </p>

            <Link
              onClick={() => setShow(false)}
              to="/checkout"
              className="
          px-3 py-2 cursor-pointer border-[2px] border-white text-[19px] font-bold rounded bg-sky-600 hover:bg-sky-700 text-center"
            >
              {" "}
              Proceed to Checkout
            </Link>
          </div>
        )}











       
      </div>
    </div>
  );
};

export default CartModal;
