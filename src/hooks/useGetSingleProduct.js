import { getSingleProduct } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";

const useGetSingleProduct = (slug) => {
  const { data = [] } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getSingleProduct(slug),
  });

  return {  product: data };
};

export default useGetSingleProduct;
