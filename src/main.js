import Vue from "vue"
import App from "./App.vue"
// get portals
import PortalVue from "portal-vue";

Vue.config.productionTip = false

// set the use of vue portal
Vue.use(PortalVue);

new Vue({
  render: h => h(App)
}).$mount("#app")
