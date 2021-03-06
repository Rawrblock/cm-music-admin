import router from "./router"
import store from "./store"
import { getToken } from "./utils/auth"

const whiteList = ["/login", "/403", "/404"]

// 导航守卫(每一次跳转)
router.beforeEach(async (to, from, next) => {
  // 获取token
  const hasToken = getToken()
  // 判断是否有token
  if (hasToken) {
    // 有token,并且还要去登录页面就直接进入 首页
    if (to.path === "/login") {
      next({ path: "/" })
    } else {
      next()
    }
  } else {
    // token不存在
    // 并且跳转的页面 不是白名单
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果不等于 -1 表示 实在白名单可以直接跳转
      next()
    } else {
      // 不在白名单 统一跳转到登录页面 并且保留想要去的页面路径
      next(`/login?redirect=${to.path}`)
    }
  }
})
