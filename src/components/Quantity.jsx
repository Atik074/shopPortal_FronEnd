import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = ({ product}) => {
    const [quantity , setQuantity] = useState(1)
 

//handle increase product item
  const increaseQuantity = () => {
   
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  // handle decrease product
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <button
        onClick={() => decreaseQuantity(quantity)}
        disabled={quantity === 1}
        className="p-[7px] mx-2 text-[15px] rounded cursor-pointer border border-[#1d1e1ede] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaMinus />
      </button>
      <p className="text-[18px] mx-2 ">{quantity}</p>
      <button
        onClick={() => increaseQuantity(quantity)}
        disabled={product.stock === quantity}
        className=" p-[7px] mx-2 text-[15px] rounded  cursor-pointer border border-[#1d1e1ede] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaPlus />
      </button>
    </>
  );
};

export default Quantity;
