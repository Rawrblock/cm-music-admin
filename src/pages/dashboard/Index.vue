<template>
  <div>欢迎 {{ nickname }}</div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Index",
  setup() {
    const store = useStore();

    return {
      nickname: computed(() => store.state.user.currentUser.nickname)
    };
  }
};
</script>

<style></style>
