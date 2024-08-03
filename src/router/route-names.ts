import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { telegramRouteNames } from '@/views/telegram/telegram-page.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...exampleViewRouteNames,
  ...authRouteNames,
  ...telegramRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
