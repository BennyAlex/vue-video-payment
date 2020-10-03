import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from "@/store";
import rules from "@/rules";

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$rules = rules

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')