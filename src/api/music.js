import { get, post, put } from "./request";

// 获取音乐列表
export const list = () => {
  return get("/musics");
};

// 创建音乐
export const create = (music) => {
  return post("/musics", music);
};

// 编辑音乐
export const update = (id, music) => {
  return put(`/musics/${id}`, music);
};

// 修改状态上架
export const publish = (id) => {
  return post(`/musics/${id}/publish`);
};

// 修改状态下架
export const close = (id) => {
  return post(`/musics/${id}/close`);
};
