import Cookies from "js-cookie"

const TokenKey = "token"

// 获取token
export const getToken = () => {
  return Cookies.get(TokenKey)
}

// 存储token
export const setToken = (token) => {
  return Cookies.set(TokenKey, token)
}

// 删除token
export const removeToken = () => {
  return Cookies.remove(TokenKey)
}
