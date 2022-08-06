<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加音乐" @click="createDialog.showDialog()" />
    </div>

    <q-table :columns="columns" :rows="data" row-key="id">
      <template v-slot:body-cell-operation="props">
        <q-td :props="props">
          <q-btn color="primary" label="编辑" flat size="xs" @click="edit(props)" />
        </q-td>
      </template>
    </q-table>
    <!-- v-model:pagination="pagination" -->
    <create-dialog
      v-if="createDialogShow"
      @hide="createDialog.hideDialog()"
      @create-success="fetchData()" />
    <edit-dialog
      v-if="editDialogShow"
      :data="musicData.value"
      @hide="editDialog.hideDialog()"
      @edit-success="fetchData()" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { list } from "../../api/music";
import { useToggleDialog } from "../../composables/useToggleDialog";
import CreateDialog from "./CreateDialog.vue";
import EditDialog from "./EditDialog.vue";

const columns = [
  { name: "name", field: "name", label: "歌曲名" },
  { name: "description", field: "description", label: "简介" },
  { name: "status", field: "status", label: "上架状态" },
  { name: "operation", field: "operation", label: "操作" }
];
const data = ref([]);

const createDialogShow = ref(false);
const editDialogShow = ref(false);

const createDialog = useToggleDialog(createDialogShow);
const editDialog = useToggleDialog(editDialogShow);

const musicData = reactive({});
const edit = (data) => {
  musicData.value = data.row;
  editDialog.showDialog();
};

const fetchData = () => {
  list().then((musicList) => {
    data.value = musicList;
  });
};

onMounted(fetchData);
</script>

<style></style>
