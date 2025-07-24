import { createNewUser } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useRegister = ()=>{
    const navigate = useNavigate()
    
    return useMutation({
      mutationFn:createNewUser ,
      onSuccess:(data)=>{
        localStorage.setItem("token", data.token)

        Swal.fire({
         icon: "success",
          title: "Registration Successful",
          text: `Welcome ${data.user.name}!`,
   
});
       navigate("/login")
      } ,

      onError:(error)=>{
  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.response?.data?.message || 'Something went wrong in register!',
      });
      }
    })

}


export default useRegister ;