import axios from "axios";
import store from "../store";
import notify from "../utils/notify";

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
    if (response.data.code) {
      handlerErrorResponse(response);
      return Promise.reject(response.data);
    }
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
  // 如果返回的结果是数组
  if (response.data instanceof Array) {
    response.data.forEach((item) => {
      notify.error(item.message);
    });
  } else {
    notify.error(response.data.message);
  }
};

const { get, post, put } = instance;

export { get, post, put };
