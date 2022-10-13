import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
Vue.use(Router)


// 如果用户没有登录但是直接通过URL访问特定页面则重新导航到登录页面
// 为路由对象添加beforeEach导航守卫
const router = new Router({
  routes: [
    { path: '/', redirect: 'login' },
    { path: '/Home', component: Home },

    {
      path: '/Login', component: Login
    }
  ]
})
// 挂载路由导航守卫，三个参数to , from,next 去向 来自，next函数表示放行，next('/login')强制跳转
router.beforeEach((to,from,next)=> {
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
})
  


export default router