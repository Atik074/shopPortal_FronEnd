import { Button } from "@/components/ui/button";
import UseAvater from "@/components/UseAvater";
import { Link, useNavigate } from "react-router-dom";

const UserModal = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()


   // handle log out
  const handleLogOut =()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("token")
      navigate("/login")
  }




  return (
  
      <div className="w-[300px] ">
        <div className="my-3 w-18 h-18 mx-auto">
          <UseAvater />  
        </div>
         <p className="text-center text-sm  underline mb-1">{user?.name} </p>
         <h3 className="text-sm text-center">{user?.email} </h3> 
            
         
     
        <div className="mt-8 flex flex-col">
        <Link to="/"  className="text-[18px] hover:underline  mb-2">My Account</Link>
        <Link to="/" className="text-[18px] hover:underline  mb-2">Dashboard</Link>
        <Link to="/" className="text-[18px] hover:underline  mb-2">Users</Link>
        <Link to="/" className="text-[18px] hover:underline  mb-2">My Account</Link>

        </div>
         <Button onClick={handleLogOut} className="w-full mt-2 cursor-pointer" variant="outline">
          Logout
        </Button>
         
       
      </div>
   
  );
};

export default UserModal;
