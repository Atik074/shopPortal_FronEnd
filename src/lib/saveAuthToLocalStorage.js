import { replaceMongoIdObj } from "./idConverter";

export const saveAuthToLocalStorage = (user, token) => {
  const userInfo = { user: replaceMongoIdObj(user), token };
  localStorage.setItem("auth", JSON.stringify(userInfo));
};
