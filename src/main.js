import Vue from "vue"
import App from "./App.vue"
// get vue portals
import PortalVue from "portal-vue";

Vue.config.productionTip = false

Vue.use( PortalVue );

new Vue({
  render: h => h(App)
}).$mount("#app");
