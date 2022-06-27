<template>
  <div>
    欢迎 {{ nickname }}
    <q-btn @click="logout">退出登录</q-btn>
  </div>
</template>
<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  name: "Index",
  setup() {
    const store = useStore()

    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () => store.dispatch("logout").then(() => window.location.reload())
    }
  }
}
</script>

<style></style>
