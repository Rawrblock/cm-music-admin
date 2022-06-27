import axios from "axios"
import store from "../store"

// 定义baseURL 使用.env文件
const baseURL = import.meta.env.VITE_API_HOST

// 创建axios
const instance = axios.create({
  baseURL
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers["Authorization"] = store.state.user.token
    }
    return config
  },
  (error) => {
    return new Promise(error)
  }
)

// 响应拦截器

const { get, post, put } = instance

export { get, post, put }
