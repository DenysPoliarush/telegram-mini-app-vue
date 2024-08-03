import type { RouteRecordRaw } from 'vue-router'

export const telegramRouteNames = {
  TelegramComponents: 'TelegramComponents',
  TelegramUseWebApp: 'TelegramUseWebApp'
}

export const telegramRoutes: Array<RouteRecordRaw> = [
  {
    path: 'telegram',
    name: telegramRouteNames.TelegramComponents,
    component: () => import('./TelegramComponents.vue'),
    meta: {
      label: 'Telegram Components'
    }
  },
  {
    path: 'web-app',
    name: telegramRouteNames.TelegramUseWebApp,
    component: () => import('./TelegramUseWebApp.vue'),
    meta: {
      label: 'Telegram Use web app'
    }
  }
]
