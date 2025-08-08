import useGetSingleProduct from "@/hooks/useGetSingleProduct";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const  {id }= useParams()
    const {product} = useGetSingleProduct(id)

    console.log("id" , product.name)

    return (
        <div>
             <h2>{product.name}</h2>
      <p>Price: {product.price}৳</p>
      <p>{product.description}</p>
        </div>
    );
};

export default SingleProduct;