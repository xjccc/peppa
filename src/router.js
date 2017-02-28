// import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/list', component: List },
    { path: '/detail/:id(\\d+)', component: Detail },
    { path: '/', redirect: '/list' }
  ]
})
