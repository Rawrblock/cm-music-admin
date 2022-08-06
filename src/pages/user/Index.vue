<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="showDialog" />
    </div>

    <q-table
      :rows="data"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      @update:pagination="fetchData" />

    <create-dialog v-if="show" @hide="hideDialog" @create-success="fetchData" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserSearch } from "../../composables/useUserSearch";
import { useToggleDialog } from "../../composables/useToggleDialog";
import CreateDialog from "./CreateDialog.vue";

const columns = [
  { field: "id", label: "ID" },
  { field: "username", label: "用户名" },
  { field: "nickname", label: "昵称" }
];
// 控制弹出组件
const show = ref(false);

const { showDialog, hideDialog } = useToggleDialog(show);

// 用户列表查询
const { data, pagination, pagesNumber, fetchData } = useUserSearch();
</script>

<style></style>
