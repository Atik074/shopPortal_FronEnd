import errorHandler from "@/lib/errorHandler";
import axiosApi from "./axiosApi";

export const getAllAdmin = async () => {
  try {
    const response = await axiosApi.get("/admin");
    return response.data;
  } catch (err) {
    errorHandler(err, "Failed to fetch  All Admin");
  }
};

// admin can make from user to admin
export const makeAdmin = async (id) => {
  try {
    const response = await axiosApi.put(`/admin/make-admin/:${id}`);
    return response.data;
  } catch (err) {
    errorHandler(err, "Failed to fetch make admin");
  }
};
