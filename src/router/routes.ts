import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    {
      path: 'telegram',
      name: routeNames.home,
      component: () => import('@/pages/Home.vue'),
      meta: {
        label: 'Home'
      }
    },
    {
      path: 'web-app',
      name: routeNames.webAppData,
      component: () => import('@/pages/UseWebApp.vue'),
      meta: {
        label: 'web app data'
      }
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
