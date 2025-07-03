import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

const FavModal = ({ favItems, onAddToCart, onClose, onRemove }) => {
  const [show, setShow] = useState(false);


  // for animation modal opening
  useEffect(() => {
    const transitionTimer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(transitionTimer );
  }, []);

  return (
    <div className="fixed z-50 flex justify-end right-52 top-16">
      <div
        className={`bg-[#1E3A8A] rounded-lg shadow-xl relative p-4 text-white transform transition-all duration-300 ease-in-out ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95"
        }`}
      >
        <h2 className="text-xl mb-2 text-center underline">
          Favourite Products
        </h2>

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
                      onClick={() => onRemove(item.id)}
                      className="text-white border border-red-600 px-3 py-1 rounded cursor-pointer mr-4 bg-red-600 hover:bg-red-700 transition duration-200"
                    >
                      <RxCross1 />
                    </button>
                    <button
                      onClick={() => {
                        onAddToCart(item);
                        onRemove(item.id);
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

        <button
          onClick={onClose}
          className="text-white border-white hover:border-red-400 text-[20px] font-bold p-2 rounded-full cursor-pointer border  absolute top-2 right-4 transition duration-300 ease-in-out "
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default FavModal;
