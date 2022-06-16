<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="count++">点击次数 {{ count }}</q-btn>
  <br>
  <br>
  <q-btn color="primary" @click="hi">请求接口</q-btn>

</template>

<script setup>
import { ref } from 'vue'
import { sayHello } from "../api/hello";

const count = ref(0)
let message = ref("CM音乐盒子")

const hi = () => {
  sayHello().then(res => {
    // console.log(res)
    message.value = res.data
  })

}


</script>



<style scoped>

</style>
