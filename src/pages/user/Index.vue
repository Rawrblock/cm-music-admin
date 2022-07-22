<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" />
    </div>
    <q-table :rows="data" :columns="columns" row-key="name" hide-pagination />

    <div class="row justify-center q-mt-md">
      <q-pagination v-model="pagination.page" color="grey-8" :max="pagesNumber" size="sm" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { search } from "../../api/user";
export default {
  setup() {
    const columns = [
      {
        field: "id",
        label: "ID"
      },
      { field: "username", label: "用户名" },
      { field: "nickname", label: "昵称" }
    ];

    const pagination = ref({
      page: 2,
      rowsPerPage: 10,
      rowsNumber: 10
    });

    const data = ref([]);
    const fetchData = () => {
      search({ page: 0 }).then((res) => {
        data.value = data.value.concat(res.data.content);
        pagination.value.page = res.data.number + 1;
        pagination.value.rowsPerPage = res.data.size;
        pagination.value.rowsNumber = res.data.totalElements;
      });
    };
    fetchData();

    return {
      columns,
      data,
      pagination,
      pagesNumber: computed(() => Math.ceil(data.length / pagination.value.rowsPerPage))
    };
  }
};
</script>

<style></style>
