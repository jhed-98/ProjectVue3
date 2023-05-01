import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../views/CounterView.vue')
    },
    // 36. Redirecciones de rutas
    {
      path: '/blogs',
      // redirect: '/post'
      redirect: { name: 'Blog' }
    },
    {
      path: '/post',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    },

    // 29. Rutas con parámetros en Vue 3
    {
      path: '/blog/:post',
      name: 'Post',
      component: () => import('../views/PostView.vue')
    },
    // 30. Trabajo con múltiples parámetros en rutas en Vue 3
    {
      path: '/user/:user/post/:post',
      name: 'User Post',
      component: () => import('../views/UserPostView.vue')
    },
    // 32. Sintaxis de coincidencia de rutas en Vue 3
    {
      path: '/compras/:orderId(\\d+)',
      name: 'Order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/compras/:productName',
      name: 'Product',
      component: () => import('../views/ProductView.vue')
    },
    // 33. Rutas con parámetros opcionales en Vue 3
    {
      path: '/users/:userId(\\d+)?',
      name: 'Lista User',
      component: () => import('../views/UserShowView.vue'),
      // 37. Recibir parámetros de la URL dentro de props
      props: true,
      // 34. Uso de rutas anidadas en Vue 3
      children: [
        {
          // users/:userID
          path: '',
          name: 'UserIndex',
          component: () => import('../views/users/IndexView.vue')
        },
        {
          // users/:userID/profile
          path: 'profile',
          name: 'UserProfile',
          component: () => import('../views/users/ProfileView.vue')
        },
        {
          // users/:userID/courses
          path: 'courses',
          name: 'UserCourses',
          component: () => import('../views/users/CoursesView.vue')
        }
      ]
    },

    // 31. Ruta 404 Not Found en Vue 3
    {
      path: '/:pathMatch(.*)',
      name: 'NotPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotPageView.vue')
    }
  ]
})

export default router
