import axios from "axios";
import store from "../store";
import { Notify } from "quasar";

// 定义baseURL 使用.env文件
const baseURL = import.meta.env.VITE_API_HOST;
const tokenPreFix = "Bearer ";

// 创建axios
const instance = axios.create({
  baseURL
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers["Authorization"] = tokenPreFix + store.state.user.token;
    }
    return config;
  },
  (error) => {
    return new Promise(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    handlerErrorResponse(error.response);
    return Promise.reject(error);
  }
);

// 全局处理错误
const handlerErrorResponse = (response) => {
  if (response.status === 401 || response.status === 403) {
    store.dispatch("logout").then(() => window.location.reload());
  }
  Notify.create({
    type: "negative",
    message: response.data.message,
    position: "top"
  });
};

const { get, post, put } = instance;

export { get, post, put };
