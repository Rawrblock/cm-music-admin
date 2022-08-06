import { create } from "../api/user";
import { ref } from "vue";

export const useCreateUser = (username, password) => {
  const createUser = () => {
    create({ username: username.value, password: password.value }).then((res) => {
      console.log(res);
    });
  };

  return {
    username,
    password,
    createUser
  };
};
