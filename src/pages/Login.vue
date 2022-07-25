<template>
  <div class="login-page">
    <q-card class="login-form-content">
      <div class="title">欢迎村民音乐后台</div>
      <q-form class="q-gutter-md" @submit="onSubmit">
        <q-input
          v-model="user.username"
          filled
          label="用户名:"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']" />

        <q-input
          v-model="user.password"
          filled
          type="password"
          label="密码:"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入密码']" />

        <q-toggle v-model="accept" label="记住我" />

        <div>
          <q-btn class="full-width" label="登录" type="submit" color="primary" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Login",
  setup() {
    // 使用组合式Vuex
    const store = useStore();
    // 使用路由
    const router = useRouter();
    const route = useRoute();

    // 定义值
    const accept = ref(false);
    const user = reactive({
      username: "",
      password: ""
    });

    // 登录方法
    const onSubmit = () => {
      store.dispatch("toLogin", user).then(() => {
        // 触发获取当前用户信息方法
        store.dispatch("fetchCurrentUser").then(() => {
          router.push({ path: route.query.redirect || "/" });
        });
      });
    };

    return {
      accept,
      user,
      onSubmit
    };
  }
};
</script>

<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form-content {
    width: 400px;
    padding: 20px;
    .title {
      font-size: 35px;
      text-align: center;
      margin-bottom: 50px;
    }
  }
}
</style>
