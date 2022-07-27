<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="toggleDialog" />
    </div>
    <q-table :rows="data" :columns="columns" row-key="name" hide-pagination />

    <div class="row justify-center q-mt-md">
      <q-pagination v-model="pagination.page" color="grey-8" :max="pagesNumber" size="sm" />
    </div>
    <create-dialog v-if="showDialog" @hide="toggleDialog" />
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
const showDialog = ref(false);

const { toggleDialog } = useToggleDialog(showDialog);
const { data, pagination, pagesNumber, fetchData } = useUserSearch();
</script>

<style></style>
