import { createSlug } from "@/lib/createSlug";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  isTopSales,
  onAddToCart,
  isFav,
  onAddToFav,
}) => {
  const discountPerProduct = (product.price * 10) / 100;
  const { id,name , images, sold, price, description } = product;
  const slug = createSlug(name)


  return (
    <div className="relative border border-gray-700 shadow-md ">
      <div className=" overflow-hidden ">
        <img
          src={images[0]?.url}
          className="w-full h-[300px] duration-700 ease-in-out
               hover:scale-110 "
          alt="picture"
        />
      </div>

      <div className="flex justify-between">
        {isTopSales ? (
          <p
            className="text-md  bg-fuchsia-600 text-white px-3 py-1 
        rounded-r-[10px] absolute shadow top-0"
          >
            sold:{sold}
          </p>
        ) : (
          <p
            className="text-md bg-fuchsia-600 text-white px-3 py-1 
        rounded-r-[10px] absolute shadow top-0"
          >
            -{discountPerProduct}tk
          </p>
        )}

        <button onClick={() => onAddToFav(product)} className="cursor-pointer">
          {isFav(id) ? (
            <FaHeart
              className="absolute top-5 right-3 text-pink-600"
              size={26}
            />
          ) : (
            <FaRegHeart
              className="absolute top-5 right-3 text-white"
              size={26}
            />
          )}
        </button>
      </div>

      <div className="ml-6 mr-2">
        <h2 className="text-xl font-medium mt-6 hover:underline cursor-pointer">
          {name}
        </h2>
        <div className="flex gap-x-2 items-center">
          {isTopSales ? (
            <h3 className="text-[18px] font-normal">price : {price}</h3>
          ) : (
            <>
              <h3 className="text-[18px] font-normal">
                price : {price - discountPerProduct}
              </h3>
              <h3 className="text-[15px] line-through italic font-normal">
                {" "}
                {price}
              </h3>
            </>
          )}
        </div>
        <h3 className="text-[18px] font-normal">Brand : {product.brand}</h3>
        <p className="text-gray-600 text-[18px] mt-2 mb-6">
          {description.slice(0, 50)}{" "}
        </p>
        <div className="flex justify-between items-center ">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-sky-800 text-white  text-[19px] rounded  mb-5 cursor-pointer px-3 py-2 hover:bg-amber-600 duration-300 ease-in-out transition-colors"
          >
            Add to cart
          </button>
          <Link to={`/products/${slug}`}
            className="bg-sky-800 text-white  text-[19px] rounded 
               mb-5 cursor-pointer px-3 py-2 hover:bg-amber-600 duration-300 ease-in-out transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
