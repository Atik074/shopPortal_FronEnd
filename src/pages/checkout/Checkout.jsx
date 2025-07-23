import { useCart } from "@/hooks";
import { RxCross1 } from "react-icons/rx";


const Checkout = () => {
    const {cartProducts, setCartProducts} = useCart()

    return (
        <div>
          
            <h2 className="text-2xl text-gray-500 font-bold">Checkout page</h2>
             {cartProducts.map((item) => (
            <li key={item.id}>
              <div className="flex justify-between items-center gap-2 w-[500px] mb-2">
                <img
                  src={item?.images[0]?.url}
                  className="w-12 rounded"
                  alt="picture"
                />
                <h4
                  className="text-[17px]  truncate max-w-[150px] font-semibold hover:underline cursor-pointer"
                  title={item.name}
                >
                  {item.name}
                </h4>
                <p className="text-white text-[16px] font-semibold">
                  {item.price}tk
                </p>
                <div className="flex items-center">
                  <button
                 
                    className="text-white border border-red-600 px-3 py-1 rounded cursor-pointer mr-4 bg-red-600 hover:bg-red-700 transition duration-200"
                  >
                    <RxCross1 />
                  </button>
                  <button
                    onClick={() => {
                     
                    }}
                    className="text-white border border-green-600 py-[4px] px-2 rounded cursor-pointer bg-green-600 hover:bg-green-700 transition duration-200 text-[18px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
      
             
        </div>
    );
};

export default Checkout;