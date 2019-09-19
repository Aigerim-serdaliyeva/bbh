import Vue from 'vue'
import vueRouter from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: vueRouter,
}).$mount('#app')
