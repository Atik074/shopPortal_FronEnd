import { useCart } from "@/hooks";
import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

const CartModal = () => {
    const { cartProducts}= useCart()
    const [productIncrease, setProductIncrease] = useState(0)

  

  
    return (
        <div className="p-2">
            <h2>Order</h2>
            <hr/>
            {
              cartProducts.length === 0 ? (
          <p className="text-[19px] text-red-500 m-4  rounded">
            You haven’t added any products yet
          </p> )
          : (
              
             cartProducts.map(product =>(
             <li key={product.id} className="list-none">
                <div className="flex gap-3">
                     <img
                    src={product?.images[0]?.url}
                    className="w-12 rounded"
                    alt="picture"
                  /> 
                  <h4
                    className="text-[17px]  truncate max-w-[150px] font-semibold"
                    title={product.name}
                  >
                    {product.name}
                  </h4>

                </div>
                <div className="flex justify-center">
                     <button 
                   
                     onClick={()=>{

                        if(productIncrease > 0){
                     setProductIncrease(productIncrease - 1)
                      }

                     }}
                     disabled={productIncrease === 0}
                      className="text-white border py-[2px] px-[6px] rounded cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaMinus />
               </button>
                    <p className="tex-xl mx-3">{productIncrease}</p>
                 <button 
                   onClick={()=>setProductIncrease(productIncrease + 1)}
                  className="text-white border py-[2px] px-[6px] rounded cursor-pointer"
                         >
                       <FaPlus />
   
                  </button>
                </div>
                  
             </li>))   
          )

            }
        </div>
    );
};

export default CartModal;