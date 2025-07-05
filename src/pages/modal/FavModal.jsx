import { useCart, useFavCart } from "@/hooks";
import { RxCross1 } from "react-icons/rx";

const FavModal = () => {
    const {favItems , setFavItems} = useFavCart()
    const {  addToCart}  = useCart()



    //remove from modal
  const handleRemoveFromModal=(id)=>{
     const restProducts = favItems.filter(item =>item.id !== id)
        setFavItems(restProducts);
  }



    return (
        <div>
               {favItems.length === 0 ? (
          <p className="text-[19px] text-red-500 m-4  rounded">
            You haven’t added any products yet
          </p>
        ) : (
          <ul>
            {favItems.map((item) => (
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
                      onClick={() =>handleRemoveFromModal(item.id)}
                      className="text-white border border-red-600 px-3 py-1 rounded cursor-pointer mr-4 bg-red-600 hover:bg-red-700 transition duration-200"
                    >
                      <RxCross1 />
                    </button>
                    <button
                      onClick={() => {
                         addToCart(item);
                       handleRemoveFromModal(item.id);
                      }}
                      className="text-white border border-green-600 py-[4px] px-2 rounded cursor-pointer bg-green-600 hover:bg-green-700 transition duration-200 text-[18px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
    );
};

export default FavModal;