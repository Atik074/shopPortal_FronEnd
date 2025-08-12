import { app } from "@/config/firease.config";
import errorHandler from "@/lib/errorHandler";
import { saveAuthToLocalStorage } from "@/lib/saveAuthToLocalStorage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axiosApi from "./axiosApi";

export const createNewUser = async (userData) => {
  try {
    const response = await axiosApi.post("/auth/register", userData);

    return response.data;
  } catch (err) {
    errorHandler(err, "create new user failed");
  }
};
// handle custom login
export const loggedInUser = async (userData) => {
  try {
    const response = await axiosApi.post("/auth/login", userData);

    saveAuthToLocalStorage(response.data.user, response.data.token);
    return response.data;
  } catch (err) {
    errorHandler(err, "user failed to logged in ");
  }
};

// handle login by google
export const googleLogin = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const token = await user.getIdToken();
    const response = await axiosApi.post("/auth/google-login", { token });

    saveAuthToLocalStorage(response.data.user, response.data.token);

    return response.data.user;
  } catch (err) {
    errorHandler(err, "google login failed");
  }
};
