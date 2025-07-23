import axios from "axios";

const axiosApi =  axios.create({
    baseURL:import.meta.env.VITE_API_KEY,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // token set  into header
   axiosApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")

    if(token){
      config.headers.Authorization =`Bearer ${token}`
    }

    return config
   })

export default axiosApi;




