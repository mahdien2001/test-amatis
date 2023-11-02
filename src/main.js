import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// router config
import VueRouter from 'vue-router'
import { Routes } from './Routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes:Routes,
  mode:'history',
  linkExactActiveClass: "active",
})


// vuex
import { store } from './Store.js'


// axios config
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.$hostname = 'http://localhost:3000'
// axios.defaults.headers.common['token'] = localStorage.getItem("token") || ""


// toast config
import Toasted from 'vue-toasted';
Vue.use(Toasted , {
  position: "bottom-right",
  duration: 3000,
})


// swiper config
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
