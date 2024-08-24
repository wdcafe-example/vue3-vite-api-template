import { createRouter, createWebHistory } from 'vue-router'
import Intro from "../views/Intro.vue"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/products/index.vue'
import ProductsDetails from '../views/products/[id].vue'
import IntroLayout from '../layouts/IntroLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProductsLayout from '../layouts/ProductsLayout.vue'

const routes = [
  {path: '/', component: Intro, meta: { layout: IntroLayout } },
  {path: '/home', component: Home, meta: { layout: DefaultLayout } },
  {path: '/about', component: About, meta: { layout: DefaultLayout } }, 
  {path: '/products', component: Products, meta: { layout: ProductsLayout } },
  {path: '/products/:id', component: ProductsDetails, meta: { layout: ProductsLayout } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router