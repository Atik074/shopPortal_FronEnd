import { useCart, useFavCart } from "@/hooks";
import { useState } from "react";
import {  BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Modal from "./modal/Modal";

 

const Navbar = () => {
     const {cartProducts}  = useCart()
   const { favItems } = useFavCart();
   const [showModal , setShowModal] = useState(false)



//modal show  or hide
   const handleModal =(e)=>{
         e.preventDefault()
      setShowModal(!showModal)
   }





 
    return (
        <div className="px-8 py-4" >
           
            <div className="flex justify-between  items-center">
                 <a href="/" className="text-[28px] font-bold  text-sky-800 ">shopStore</a>
                <ul className="flex  items-center relative">
                    
                         <li className="mx-6 text-[21px]">
                        <a href='/'>Woman</a>
                        </li>
                    <li className="mx-6 text-[21px]"><a href='#'>Man</a></li>
                    <li className="mx-6 text-[21px]"><a href='#'>Kids</a></li>
                    <li className="mx-6 text-[21px]"><a href='#'>New Arrival</a></li>
            
                    <li className="mx-6 text-[25px]">
                        <a href='#' onClick={(e)=>handleModal(e)}>
                        <FaRegHeart />

                        </a>
             
                           {
                        favItems.length >= 1 &&  <span className="bg-fuchsia-600 border 
                           w-[23px] h-[23px] p-[1px] text-center rounded-full  text-sm absolute right-[180px] -top-[5px] text-white ">{favItems.length}</span>
                        }
                        </li>
                    <li className="mx-6 text-[25px] ">
                        <a href='#' onClick={(e)=>handleModal(e)} >
                            <BsCart2 />
                            </a>
                       
                        </li>
                        {
                           cartProducts.length >= 1 &&  <span className="bg-fuchsia-600 border 
                           w-[23px] h-[23px] p-[1px] text-center rounded-full  text-sm absolute right-[109px] -top-[5px] text-white ">{cartProducts.length}</span>
                        }
                       

                    {/* {
                        user ? <li className="mx-6 text-[21px]">
                        <a href='#'>LogOut</a></li> : <li className="mx-6 text-[21px]">
                        <a href='#'>Login</a></li>
                    } */}
                    <li className="mx-6 text-[21px]">
                        <a href='/login'>Login</a></li>
                    
            
                </ul>
            </div>

             <div>
              { 
               showModal && <Modal 
               onClose={handleModal}
              
             
               /> 
              }
              
            </div>
             
            
           
        </div>
    );
};

export default Navbar;