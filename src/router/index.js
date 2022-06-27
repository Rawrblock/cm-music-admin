// 1. 引入vue-router
import { createRouter, createWebHashHistory } from "vue-router"

// 2. 配置路由页面规则
const routes = [
  {
    // 布局框架页面
    path: "/",
    component: () => import("../pages/Layout.vue"),
    redirect: "index",
    children: [
      {
        // 主页
        path: "index",
        component: () => import("../pages/index/Index.vue")
      }
    ]
  },
  {
    // 登录
    path: "/login",
    component: () => import("../pages/Login.vue")
  },
  {
    // 无权限
    path: "/403",
    component: () => import("../pages/403.vue")
  },
  {
    // 未找到
    path: "/:pathMatch(.*)",
    component: () => import("../pages/404.vue")
  }
]

// 3. 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 4. 暴露router
export default router
