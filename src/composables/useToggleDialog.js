export const useToggleDialog = (show) => {
  const hideDialog = () => {
    show.value = false;
  };

  const showDialog = () => {
    show.value = true;
  };

  return {
    show,
    hideDialog,
    showDialog
  };
};
