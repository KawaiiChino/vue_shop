import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
// 导入全局样式
import './assets/css/global.css'
import './plugins/element.js'
import router from './router'

axios.defaults
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
