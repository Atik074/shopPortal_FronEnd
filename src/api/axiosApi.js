import axios from "axios";

const axiosApi =  axios.create({
    baseURL:import.meta.env.VITE_API_KEY,
    headers: {
      "Content-Type": "application/json",
    },
  });


export default axiosApi;




