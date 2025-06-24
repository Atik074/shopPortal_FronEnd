import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const [addToFav , setAddToFav] = useState(false)

  const handleFavourite =()=>{
       setAddToFav(!addToFav)
  }


  return (
    <div className="relative border border-gray-700 shadow-md rounded-md">
      <div className=" overflow-hidden ">
        <img
          src={product?.images[0]?.url}
          className="w-full h-[300px] duration-700 ease-in-out
               hover:scale-110 "
          alt="picture"
        />
      </div>

      <div className="flex justify-between">
        <p className="text-md bg-amber-500 px-3 py-1 
        rounded-bl-[10px] absolute shadow top-0">
          -20tk
        </p>
        <button onClick={handleFavourite} className="cursor-pointer">
          {
            addToFav ? <FaHeart className="absolute top-5 right-3 text-pink-600" size={26} /> : <FaRegHeart className="absolute top-5 right-3 text-white" size={26} />
          }
          
        </button>
        
      </div>

      <div className="ml-6 mr-2">
        <h2 className="text-xl font-medium mt-6">{product.name}</h2>
        <h3 className="text-[18px] font-normal">price : {product.price}</h3>
        <h3 className="text-[18px] font-normal">Brand : {product.brand}</h3>
        <p className="text-gray-600 text-[18px] mt-2 mb-6">
          {product.description.slice(0, 50)}{" "}
        </p>
        <div className="flex justify-between items-center ">
          <button className="bg-sky-800 text-white  text-[19px] rounded  mb-5 cursor-pointer px-3 py-2 hover:bg-amber-600 duration-300 ease-in-out transition-colors">
            Add to cart
          </button>
          <button
            className="bg-sky-800 text-white  text-[19px] rounded 
               mb-5 cursor-pointer px-3 py-2 hover:bg-amber-600 duration-300 ease-in-out transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
