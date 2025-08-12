import useGetSingleProduct from "@/hooks/useGetSingleProduct";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const  {slug }= useParams()
    const {product ,isError,error} = useGetSingleProduct(slug)

    console.log("id" , product)
    
 if (isError) {
    return <ErrorMsg msg={error?.message}/>
  }

    return (
        <div>
             <h2>{product.name}</h2>
      <p>Price: {product.price}৳</p>
      <p>{product.description}</p>
        </div>
    );
};

export default SingleProduct;