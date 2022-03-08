import Vue from "vue";
import App from "./App.vue";

import Vue2SfcLib from "vue2-sfc-lib";

Vue.config.productionTip = false;

Vue.use(Vue2SfcLib);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
