import { createStore, createLogger } from "vuex"
import user from "./modules/user"

const debug = process.env.NODE_ENV !== "production"

export default createStore({
  modules: {
    user
  },
  plugins: debug ? [createLogger()] : []
})
