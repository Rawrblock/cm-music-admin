<template>
  <q-dialog v-model="show" persistent @show-hide="$emit('hide')">
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加用户</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense label="用户名" v-model="username" autofocus @keyup.enter="show = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          dense
          label="密码"
          type="password"
          v-model="password"
          autofocus
          @keyup.enter="show = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="确定" color="primary" v-close-popup @click="createUser(username, password)" />
        <q-btn flat label="取消" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useCreateUser } from "../../composables/useCreateUser";

const show = ref(true);

const { username, password, createUser } = useCreateUser();
</script>

<style></style>
