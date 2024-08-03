import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { telegramRoutes } from '@/views/telegram/telegram-page.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.TelegramComponents },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...telegramRoutes
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
