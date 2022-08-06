// 组合 单独封装功能
import { ref, computed, onMounted } from "vue";
import { search } from "../api/user";
export const useUserSearch = () => {
  const data = ref([]);
  const pagination = ref({
    // 当前页
    page: 0,
    // 页大小
    rowsPerPage: 10
  });

  // 获取数据
  const fetchData = () => {
    const pageConfig = {
      page: pagination.value.page - 1,
      size: pagination.value.rowsPerPage
    };
    search(pageConfig).then((res) => {
      // 数据
      data.value = res.content;
      // 更新当前页
      pagination.value.page = res.number + 1;
      // 更新 页大小
      pagination.value.rowsPerPage = res.size;
      // pagination.value.rowsNumber = res.totalElements;
    });
  };

  onMounted(fetchData);

  return {
    data,
    pagination,
    fetchData
  };
};
