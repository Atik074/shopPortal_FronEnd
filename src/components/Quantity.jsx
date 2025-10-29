import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = ({ product, setProducts }) => {
  // handle quantity increase
  const handleIncQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                product.quantity < product.stock
                  ? product.quantity + 1
                  : product.quantity,
            }
          : product
      )
    );
  };

  // handlle quantity decrease
  const handleDecQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };

  return (
    <>
    
      <button
        onClick={() => handleDecQuantity(product.id)}
        disabled={product.quantity === 1}
        className="p-[7px] mx-2 text-[15px] rounded cursor-pointer border border-[#1d1e1ede] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaMinus />
      </button>
      <p className="text-[18px] mx-2 ">{product.quantity}</p>
      <button
        onClick={() => handleIncQuantity(product.id)}
        disabled={product.quantity === product.stock}
        className=" p-[7px] mx-2 text-[15px] rounded  cursor-pointer border border-[#1d1e1ede] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaPlus />
      </button>
    </>
  );
};

export default Quantity;
