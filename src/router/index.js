// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Inicio',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'login',
          name: 'Ingresar',
          component: () => import('@/views/login/Index.vue'),
        },
        {
          path: 'logout',
          name: 'Salir',
          component: () => import('@/views/logout/Index.vue'),
        },
        {
          path: 'admin',
          name: 'Admin Panel',
          component: () => import('@/views/admin/Index.vue'),
        },
        {
          path: 'posts',
          name: 'Posts',
          component: () => import('@/views/admin/posts/Index.vue'),
        },
        {
          path: 'about',
          name: 'El estudio',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contacto',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'services',
          name: 'Servicios',
          component: () => import('@/views/services/Index.vue'),
          meta: { src: require('@/assets/pricing.jpg') },
        },
        {
          path: 'news',
          name: 'Noticias',
          component: () => import('@/views/news/Index.vue'),
          meta: { src: require('@/assets/marketing.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
