import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CaraBayar from './pages/CaraBayar.vue'
import ClientArea from './pages/ClientArea.vue'
import Tentang from './pages/Tentang.vue'
import Karir from './pages/Karir.vue'
import Blog from './pages/Blog.vue'
import Berita from './pages/Berita.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/cara-bayar',
    component: CaraBayar
  },
  {
    path: '/client-area',
    component: ClientArea
  },
  {
    path: '/tentang',
    component: Tentang
  },
  {
    path: '/karir',
    component: Karir
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/berita',
    component: Berita
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
