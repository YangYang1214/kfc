// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Order from './components/Order'
import Food from './components/Food'
import Help from './components/Help'
import Register from './components/Register'
import Login from './components/Login'
import Axios from 'axios'

Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {path: '/', component: Home},
  {path: '/order', name:'order', component: Order},
  {path: '/food', component: Food},
  {path: '/help', component: Help},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path:'*',redirect:'/'}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
