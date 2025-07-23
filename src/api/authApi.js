import axiosApi from "./axiosApi"

export const createNewUser =async(userData)=>{
   const response =  await axiosApi.post("/auth/register" , userData )
   console.log(response)
   return response?.data ;

}