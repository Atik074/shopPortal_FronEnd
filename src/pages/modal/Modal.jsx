import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";


const Modal = ({ onClose }) => {
  const [show, setShow] = useState(false);


  // for animation modal opening
  useEffect(() => {
    const transitionTimer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(transitionTimer );
  }, []);


  return (
    <div className="fixed z-50 flex justify-end right-48 top-16">
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
{/* ///////////////////////////// */}


      <CartModal setShow={setShow}/>










{/* ///////////////////////////// */}

         
       


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

export default Modal;
