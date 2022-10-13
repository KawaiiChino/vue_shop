import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
// 导入全局样式
import './assets/css/global.css'
import './plugins/element.js'
import router from './router'
// 配置请求的根路径(axios)
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
