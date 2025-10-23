import useGetSingleProduct from "@/hooks/useGetSingleProduct";
import { useParams } from "react-router-dom";
import ImageZoomer from "./ImageZoomer";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Quantity from "@/components/Quantity";

const SingleProduct = () => {
  const { slug } = useParams();
  const { product, isError, error } = useGetSingleProduct(slug);

  if (isError) {
    return <ErrorMsg msg={error?.message} />;
  }

  return (
    <div className="m-20">
      <div className="flex gap-x-20">
        <ImageZoomer imageUrl={product?.images?.[0]?.url} />
        <div>
          <h2 className="text-2xl font-semibold mb-1">{product.name}</h2>

          <p className="text-[19px] my-2">{product.description}</p>

          <p className="text-[15px] my-2">
            {product.stock > 0 ? (
              <span
                className="bg-[#0b7634e5] 
            px-2 rounded-xl text-[#1bff94] italic"
              >
                INSTOCK
              </span>
            ) : (
              <span
                className="bg-[#ec2c2c] 
            px-2 rounded-xl text-[#faf5f5] italic"
              >
                OUT OF STOCK
              </span>
            )}
          </p>
          <Rating style={{ maxWidth: 130 }} value={product.ratings} readOnly />

          <div className="my-5 py-4 border-y border-y-[#a6a7a9]">
            <p className="text-xl font-bold">Price: {product.price}৳</p>
          </div>

          <div className="flex  items-center">
            <p className="text-[19px] mr-2">Quantity : </p>
            <Quantity product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
