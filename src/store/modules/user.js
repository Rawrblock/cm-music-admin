import { createToken } from "../../api/token";
import { me } from "../../api/user";
import {
  getCurrentUser,
  getToken,
  removeCurrentUser,
  removeToken,
  setCurrentUser,
  setToken
} from "../../utils/auth";

const state = () => ({
  token: getToken(),
  currentUser: getCurrentUser()
});

const getters = {
  // 切割昵称
  nicknameFirstWord: (state) => {
    return state.currentUser && state.currentUser.nickname
      ? state.currentUser.nickname.slice(0, 1)
      : "";
  }
};

const actions = {
  // 登录方法
  toLogin({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      // 调用api
      createToken(username.trim(), password)
        .then((token) => {
          // 存储 token
          commit("SET_TOKEN", token);
          // 持久化操作
          setToken(token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 退出登录
  logout({ commit }) {
    commit("SET_TOKEN", "");
    commit("SET_CURRENTUSER", "");
    removeToken();
    removeCurrentUser();
  },
  // 获取当前用户信息
  fetchCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      me()
        .then((currentUser) => {
          commit("SET_CURRENTUSER", currentUser);
          // 持久化操作
          setCurrentUser(currentUser);
          resolve(currentUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

const mutations = {
  // 存储token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  // 存储当前用户信息
  SET_CURRENTUSER: (state, currentUser) => {
    state.currentUser = currentUser;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
