import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
// import about from '../views/about.vue'
// import account from '../views/account.vue'
// import admin from '../views/admin.vue'
// import adminproducts from '../views/adminproducts.vue'
// import addProducts from '../views/AddProductModal.vue'
// import addPaintings from '../views/AddPaintings.vue'
// import addUsers from '../views/AddUser.vue'
// import adminpaintings from '../views/adminpaintings.vue'
// import adminusers from '../views/adminusers.vue'
// import allpaintings from '../views/allpaintings.vue'
// import singlepainting from '../views/singlepainting.vue'
// import allproducts from '../views/allproducts.vue'
// import singleproduct from '../views/singleproduct.vue'
// import contact from '../views/contact.vue'
// import login from '../views/login.vue'
// import register from '../views/register.vue'
// import landing from '../views/landing.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('@/views/about.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: ()=>import('@/views/account.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=>import('@/views/admin.vue'),
    props:true
  },
  {
    path: '/adminproducts',
    name: 'adminproducts',
    component: ()=>import('@/views/adminproducts.vue'),
    props:true
  },
  {
    path: '/addProducts',
    name: 'addProducts',
    component: ()=>import('@/views/AddProductModal.vue'),
    props:true
  },
  {
    path: '/addPaintings',
    name: 'addPaintings',
    component: ()=>import('@/views/AddPaintings.vue'),
    props:true
  },
  {
    path: '/addUsers',
    name: 'addUsers',
    component: ()=>import('@/views/AddUser.vue'),
    props:true
  },
  {
    path: '/adminpaintings',
    name: 'adminpaintings',
    component: ()=>import('@/views/adminpaintings.vue'),
    props:true
  },
  {
    path: '/adminusers',
    name: 'adminusers',
    component: ()=>import('@/views/adminusers.vue'),
    props:true
  },
  {
    path: '/allpaintings',
    name: 'allpaintings',
    component: ()=>import('@/views/allpaintings.vue'),
    props:true
  },
  {
    path: '/singlepainting/:id',
    name: 'singlepainting',
    component: ()=>import('@/views/singlepainting.vue'),
    // props:true
  },
  {
    path: '/allproducts',
    name: 'allproducts',
    component: ()=>import('@/views/allproducts.vue'),
    props:true
  },
  {
    path: '/singleproduct/:id',
    name: 'singleproduct',
    component: ()=>import('@/views/singleproduct.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('@/views/contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('@/views/register.vue')
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: ()=>import('@/views/privacypolicy.vue')
  },
  {
    path: '/tos',
    name: 'tos',
    component: ()=>import('@/views/tos.vue')
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: ()=>import('@/views/shipping.vue')
  },
  {
    path: '/refund',
    name: 'refund',
    component: ()=>import('@/views/refund.vue')
  }
]






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
