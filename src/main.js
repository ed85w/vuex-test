import Vue from 'vue'
import App from './App.vue'
import { myStore } from './store/store'

Vue.config.productionTip = false

new Vue({
  store: myStore,
  render: h => h(App),
}).$mount('#app')
