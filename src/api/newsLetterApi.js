import errorHandler from "@/lib/errorHandler";
import axiosApi from "./axiosApi";

export const createSubscriber = async (email) => {
  try {
    const response = await axiosApi.post("/newsletter", { email });

    return response?.data;
  } catch (err) {
    const error = err.response?.data?.message;

    throw new Error(error);
  }
};

export const checkedSubscriber = async (email) => {
  try {
    const res = await axiosApi.get(`/newsletter/check?email=${email}`);
    return res.data.subscribed;
  } catch (err) {
    errorHandler(err, "error in cheack subscriber");
  }
};
