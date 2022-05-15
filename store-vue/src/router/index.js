import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue')
  },

  {
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    children: [
      {
        path: 'computers',
        component: () => import ('../views/catalog/Computers.vue')
      },
      {
        path: 'mouse',
        component: () => import ('../views/catalog/Mouse.vue')
      },
      {
        path: 'keyboards',
        component: () => import ('../views/catalog/Keyboards.vue')
      },
      {
        name: 'OneProduct',
        path: 'product/:id',
        component: () => import ('../views/catalog/OneProduct.vue')
      },

    ]
  },

  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },

  {
    path: '/enter',
    component: () => import('../views/Enter.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },

  {
    path: '/404',
    component: () => import('../views/NotFound.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
