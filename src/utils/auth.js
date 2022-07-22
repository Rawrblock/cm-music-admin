// 持久层操作
import Cookies from "js-cookie";

const TokenKey = "token";
const UserKey = "current-user";

// 获取token
export const getToken = () => {
  return Cookies.get(TokenKey);
};

// 存储token
export const setToken = (token) => {
  return Cookies.set(TokenKey, token);
};

// 删除token
export const removeToken = () => {
  Cookies.remove(TokenKey);
};

// 获取当前用户信息
export const getCurrentUser = () => {
  const user = Cookies.get(UserKey);
  return user === undefined ? null : JSON.parse(Cookies.get(UserKey));
};

// 存储当前用户信息
export const setCurrentUser = (currentUser) => {
  return Cookies.set(UserKey, JSON.stringify(currentUser));
};

// 删除当前用户信息
export const removeCurrentUser = () => {
  Cookies.remove(UserKey);
};
