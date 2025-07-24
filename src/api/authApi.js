import axiosApi from "./axiosApi"

export const createNewUser =async(userData)=>{
   const response =  await axiosApi.post("/auth/register" , userData )
 
   return response?.data ;

}

export const loggedInUser =async(userData)=>{
  const response =  await axiosApi.post("/auth/login" ,
  userData)
   return response?.data ;

}