import { loggedInUser } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const useLogin =()=>{
    const navigate = useNavigate()

    return useMutation({
      mutationFn:loggedInUser,
      onSuccess:(data)=>{
        localStorage.setItem("token", data.token)
        localStorage.setItem("user",  JSON.stringify(data?.user) )
       
        Swal.fire({
         icon: "success",
          title: "Login Successful",
          text: `Welcome ${data.user.name}!`,
   
});
       navigate("/")
      } ,

      onError:(error)=>{
  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.response?.data?.message || 'Something went wrong in login system!',
      });
      }
    })
}


export default useLogin ;