<template>
  <div class="page">
    <div class="error-code">404</div>
    <div class="tips">抱歉，你访问的页面不存在！</div>
    <!-- 按钮区域 -->
    <div class="action-area">
      <q-btn
        color="primary"
        label="返回"
        @click="
          () => {
            $router.back()
          }
        "
      />

      <q-btn
        color="primary"
        outline
        label="首页"
        @click="
          () => {
            $router.push('/')
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error-code {
    font-size: 300px;
    line-height: 300px;
  }
  .tips {
    color: #999;
    margin-bottom: 50px;
  }
  .action-area {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
