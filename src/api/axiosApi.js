import axios from "axios";

const axiosApi =  axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // token set  into header
   axiosApi.interceptors.request.use((config)=>{
    const auth = JSON.parse(localStorage.getItem("auth")) 
   

    if(auth?.token){
      config.headers.Authorization =`Bearer ${auth?.token}`
    }

    return config
   })

export default axiosApi;




