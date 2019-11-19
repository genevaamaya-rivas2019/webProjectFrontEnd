import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CoverPage from '../components/CoverPage.vue'
import HelloWorld from '../components/HelloWorld.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cover',
    name : 'CoverPage',
    component: CoverPage
  },
  {
    path: '/user',
    name : 'HelloWorld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
