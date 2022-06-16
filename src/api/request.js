import axios from "axios";

// 定义baseURL 使用.env文件
const baseURL = import.meta.env.VITE_API_HOST

// 创建axios
const instance = axios.create({
    baseURL
})

const { get, post, put } = instance

export {get, post, put}