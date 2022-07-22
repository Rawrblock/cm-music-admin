import { createApp } from "vue";

import { Quasar, Notify } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 引入vuex
import store from "./store";
import "./permission";

let myApp = createApp(App);
myApp.use(Quasar, {
  plugins: {
    Notify
  }
});

// 使用路由
myApp.use(router);
// 使用vuez
myApp.use(store);
myApp.mount("#app");
