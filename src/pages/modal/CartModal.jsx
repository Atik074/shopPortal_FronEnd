import { useCart } from "@/hooks";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartModal = ({setShow}) => {
  const { cartProducts, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  //handle Total Price In to Cart
  const handleTotalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="px-3 w-[600px]">
      <h2 className="text-xl font-medium"> My Cart Products</h2>

      <div className="my-5">
        {cartProducts.length === 0 ? (
          <p className="text-[19px] text-red-500 m-4  rounded">
            You haven’t added any products yet
          </p>
        ) : (
          <table className="w-full border-collapse ">
            <thead>
              <tr className="border-b-2 text-[18px] m-3">
                <th className="text-start ">Image</th>
                <th className="text-start">Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Actions</th>
                <th className="text-center">Total</th>
                <th className="text-right">Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product?.images[0]?.url}
                      className="w-12 rounded my-2"
                      alt="picture"
                    />
                  </td>
                  <td className="text-[18px] truncate max-w-[100px]">
                    {product.name}
                  </td>
                  <td className="text-center text-[16px]">{product.price}</td>
                  <td className="text-center text-[16px]">
                    {product.quantity}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      disabled={product.quantity === 1}
                      className="text-white p-1 text-[14px] rounded cursor-pointer border  disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaMinus />
                    </button>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      disabled={product.stock === 1}
                      className="text-white text-[14px]  p-1 rounded mx-3 cursor-pointer border  disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaPlus />
                    </button>
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
          </table>
        )}

        {cartProducts.length >= 1 && (
          <div className="flex flex-col ">
            <p className="text-xl text-end mb-4 mt-6 font-semibold text-amber-400 mr-14">
              Total Price : {handleTotalPrice}tk
            </p>

            <Link 
             onClick={()=>setShow(false)}
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
