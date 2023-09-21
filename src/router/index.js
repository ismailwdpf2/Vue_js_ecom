import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PV from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import DetailView from '../views/DetailView.vue'
import ApiproductView from '../views/ApiproductView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/details/:id', 
      component: DetailView 
    },
    {
      path: '/products',
      name: 'products',
      component: PV
    },
    {
      path:'/apiproduct',
      name: 'apiproduct',
      component: ApiproductView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
   
  ]
})

export default router
