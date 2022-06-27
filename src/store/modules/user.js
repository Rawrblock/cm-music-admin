import { login } from "../../api/user"
import { getToken, removeToken, setToken } from "../../utils/auth"

const state = () => ({
  nickname: "",
  token: getToken(),
  username: "",
  roles: []
})

const getters = {
  // 切割昵称
  nicknameFirstWord: (state) => {
    return state.nickname.slice(0, 1)
  }
}

const actions = {
  // 登录方法
  toLogin({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      // 调用api
      login(username.trim(), password)
        .then((response) => {
          const authorization = response.headers["authorization"]
          // 存储 token
          commit("SET_TOKEN", authorization)
          setToken(authorization)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 退出登录
  logout({ commit }) {
    commit("SET_TOKEN", "")
    commit("SET_ROLES", [])
    removeToken()
  }
}

const mutations = {
  // 存储token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 存储昵称
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname
  },
  // 存储权限
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
