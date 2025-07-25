import { useCart, useFavCart } from "@/hooks";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import UseAvater from "@/components/UseAvater";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  const { cartProducts } = useCart();
  const { favItems } = useFavCart();
  const [showModal, setShowModal] = useState(false);
  const [showFavModal, setShowFavModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  //modal show  or hide
  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <div className="px-8 py-4">
      <div className="flex justify-between  items-center">
        <a href="/" className="text-[28px] font-bold  text-sky-800 ">
          shopStore
        </a>
        <ul className="flex  items-center relative">
          <li className="mx-6 text-[21px]">
            <a href="/">Woman</a>
          </li>
          <li className="mx-6 text-[21px]">
            <a href="#">Man</a>
          </li>
          <li className="mx-6 text-[21px]">
            <a href="#">Kids</a>
          </li>
          <li className="mx-6 text-[21px]">
            <a href="#">New Arrival</a>
          </li>

          <li className="mx-6 text-[25px]">
            <a
              href="#"
              onClick={(e) => {
                handleModal(e);
                setShowFavModal(true);
                setShowCartModal(false);
              }}
            >
              <FaRegHeart />
            </a>

            {favItems.length >= 1 && (
              <span
                className="bg-fuchsia-600 border 
                           w-[23px] h-[23px] p-[1px] text-center rounded-full  text-sm absolute right-[180px] -top-[5px] text-white "
              >
                {favItems.length}
              </span>
            )}
          </li>
          <li className="mx-6 text-[25px] ">
            <a
              href="#"
              onClick={(e) => {
                handleModal(e);
                setShowCartModal(true);
                setShowFavModal(false);
              }}
            >
              <BsCart2 />
            </a>
          </li>
          {cartProducts.length >= 1 && (
            <span
              className="bg-fuchsia-600 border 
                           w-[23px] h-[23px] p-[1px] text-center rounded-full  text-sm absolute right-[109px] -top-[5px] text-white "
            >
              {cartProducts.length}
            </span>
          )}

          {   user ?  <UseAvater user={user}/>
               
                          : 
                      <li className="x-6 text-[21px] bg-amber-500 px-3 py-1 rounded-md hover:bg-amber-600 hover:text-white transition-all">
                       <Link to='/login'>Login</Link>
                        </li>
                    }
         
        </ul>
      </div>

      <div>
        {showModal && (
          <Modal
            onClose={handleModal}
            showFavModal={showFavModal}
            showCartModal={showCartModal}
          />
        )}
      </div>

      <hr className="my-3 w-full" />
    </div>
  );
};

export default Navbar;
