import { checkedSubscriber, createSubscriber } from "@/api/newsLetterApi";
import Swal from "sweetalert2";
import "./newsLetter.css";
import { useState } from "react";

const NewsLetter = () => {
  const [email,setEmail] = useState("")




  const handleSubscriber = async (e) => {
        e.preventDefault();
     

       
    try {
      const allreadySubscribed = await checkedSubscriber(email);

      if (allreadySubscribed) {
         setEmail("") 
        return Swal.fire({
          title: "You are already subscribed",
          icon: "info",
        });
        
      }

      const res = await createSubscriber(email);


      Swal.fire({
        title: res.message,
        icon: "success",
        draggable: true,
      });
            

     setEmail("")   
    
    } catch (err) {
      Swal.fire({
        title: err.message || "Something went wrong",
        icon: "error",
      });
    }



  };

  return (
    <div className=" w-[60%] mx-auto my-28  p-4  ">
      <h2 className="text-3xl text-center text-red-500 font-medium mb-3">
        Stay Updated with the Latest Trends
      </h2>
      <p className="text-[18px] text-gray-600 mb-5">
        Subscribe to our{" "}
        <span className="text-2xl text-blue-800 italic font-medium ">
          NewsLetter{" "}
        </span>{" "}
        and be the first to know about new arrivals, exclusive offers, and
        fashion tips!
      </p>
      <form onSubmit={handleSubscriber} className="flex justify-center items-center" action="#">
        <input
          type="email"
          placeholder="Please type your email"
          className="py-3 animated-input  text-md  "
          name="email"
          id="email"
          value={email}           
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <button
            type="submit"
          className="py-[12px] px-2 bg-amber-500 text-xl  cursor-pointer rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
