import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Emprendedor from  '../views/Emprendedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emprendedor',
    name: 'Emprendedor',
    component: Emprendedor
  },
  {
    path: '/plandenegocio',
    name: 'PlandeNegocio',
    component: PlandeNegocio
  }, 
  {
    path: '/sectorciiu',
    name: 'sectorCiuu',
    component: SectorCiuu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
