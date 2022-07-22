import { get } from "./request";

export const search = (paging) => {
  return get("/users/", { params: paging });
};

// 获取当前用户的方法
export const me = () => {
  return get("/users/me");
};
