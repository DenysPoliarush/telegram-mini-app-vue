import { telegramRouteNames } from '@/views/telegram/telegram-page.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...telegramRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
