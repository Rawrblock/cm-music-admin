// 1. 引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

export const menuRoutes = [
  {
    // 主页
    path: "dashboard",
    name: "Dashboard",
    meta: { title: "控制台", icon: "dashboard" },
    component: () => import("../pages/dashboard/Index.vue")
  },
  {
    path: "user",
    name: "User",
    meta: { title: "用户管理", icon: "manage_accounts" },
    component: () => import("../pages/user/Index.vue")
  },
  {
    path: "music",
    name: "Music",
    meta: { title: "歌曲管理", icon: "music_note" },
    component: () => import("../pages/music/Index.vue")
  }
];

// 2. 配置路由页面规则
const routes = [
  {
    path: "/",
    component: () => import("../pages/Layout.vue"),
    redirect: "dashboard",
    children: menuRoutes
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
];

// 3. 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 4. 暴露router
export default router;
