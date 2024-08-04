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
      component: () => import('@/pages/TelegramWebAppData.vue'),
      meta: {
        label: 'Web app data'
      }
    },
    {
      path: 'buttons',
      name: routeNames.buttons,
      component: () => import('@/pages/TelegramButtons.vue'),
      meta: {
        label: 'Buttons'
      }
    },
    {
      path: 'expanded-viewport',
      name: routeNames.expandedViewport,
      component: () => import('@/pages/TelegramExpandedViewport.vue'),
      meta: {
        label: 'Expanded viewport'
      }
    },
    {
      path: 'theme',
      name: routeNames.theme,
      component: () => import('@/pages/TelegramTheme.vue'),
      meta: {
        label: 'Theme'
      }
    },
    {
      path: 'biometric-manager',
      name: routeNames.biometricManager,
      component: () => import('@/pages/TelegramBiometricManager.vue'),
      meta: {
        label: 'Biometric manager'
      }
    },
    {
      path: 'closing-confirmation',
      name: routeNames.closingConfirmation,
      component: () => import('@/pages/TelegramClosingConfirmation.vue'),
      meta: {
        label: 'Closing confirmation'
      }
    },
    {
      path: 'cloud-storage',
      name: routeNames.cloudStorage,
      component: () => import('@/pages/TelegramCloudStorage.vue'),
      meta: {
        label: 'Cloud storage'
      }
    },
    {
      path: 'popup',
      name: routeNames.popup,
      component: () => import('@/pages/TelegramPopup.vue'),
      meta: {
        label: 'Popup'
      }
    },
    {
      path: 'haptic',
      name: routeNames.haptic,
      component: () => import('@/pages/TelegramHapticFeedback.vue'),
      meta: {
        label: 'Haptic'
      }
    },
    {
      path: 'navigation',
      name: routeNames.navigation,
      component: () => import('@/pages/TelegramNavigation.vue'),
      meta: {
        label: 'Navigation'
      }
    },
    {
      path: 'share-story',
      name: routeNames.shareStory,
      component: () => import('@/pages/TelegramShareStory.vue'),
      meta: {
        label: 'Share story'
      }
    },
    {
      path: 'qr-scanner',
      name: routeNames.qrScanner,
      component: () => import('@/pages/TelegramQRScanner.vue'),
      meta: {
        label: 'QR Scanner'
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
