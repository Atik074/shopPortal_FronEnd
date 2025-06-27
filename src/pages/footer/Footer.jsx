import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">

    <div className="flex justify-between items-center  text-white p-4">
      <div>
        <a href="/" className="text-[28px] font-semibold italic">ShopPortal</a>
        <p className="text-sm">our own brand</p>
      </div>
      <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-[18px] ">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/" className="hover:underline">Condition</a></li>
            <li><a href="/" className="hover:underline">About us</a></li>
            <li><a href="/" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      <div>
        <h3 className="text-xl mb-3">Connect With Social Media</h3>
        <div className="flex justify-center items-center gap-4">
          <span className="text-xl p-[6px] border-2 rounded-full cursor-pointer hover:bg-sky-500">
            {" "}
            <FaFacebookF />
          </span>
          <span className="text-xl p-[6px] border-2 rounded-full cursor-pointer hover:bg-sky-500">
            <FaXTwitter />
          </span>
          <span className="text-xl p-[6px] border-2 rounded-full cursor-pointer hover:bg-sky-500">
            {" "}
            <FaSquareInstagram />
          </span>
          <span className="text-xl p-[6px] border-2 rounded-full cursor-pointer hover:bg-sky-500">
            {" "}
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>

       <p className="text-center text-md text-gray-400  pb-2"> &copy; {new Date().getFullYear()} ShopTrend. All rights reserved.</p>
     </div>
  );
};

export default Footer;
