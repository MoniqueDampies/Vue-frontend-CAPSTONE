import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import account from '../views/account.vue'
import allpaintings from '../views/allpaintings.vue'
import singlepainting from '../views/singlepainting.vue'
import allproducts from '../views/allproducts.vue'
import singleproduct from '../views/singleproduct.vue'
import contact from '../views/contact.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import landing from '../views/landing.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/allpaintings',
    name: 'allpaintings',
    component: allpaintings
  },
  {
    path: '/singlepainting',
    name: 'singlepainting',
    component: singlepainting
  },
  {
    path: '/allproducts',
    name: 'allproducts',
    component: allproducts
  },
  {
    path: '/singleproduct',
    name: 'singleproduct',
    component: singleproduct,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/landing',
    name: 'landing',
    component: landing
  }
]






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
