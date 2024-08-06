import type { Plugin } from 'vue'
import { TonConnectUI, type TonConnectUiOptions } from '@tonconnect/ui'

const TonConnect: Plugin = {
  install: (app) => {
    const tonConnectUI: TonConnectUI = new TonConnectUI({
      manifestUrl: 'https://13d1-3-66-40-130.ngrok-free.app/tonconnect-manifest.json',
      actionsConfiguration: {
        twaReturnUrl: 'https://t.me/my_first_mini_app_on_vue_bot/test_mini_app'
      }
    })

    const setOptions = (options: TonConnectUiOptions) => {
      if (tonConnectUI) {
        tonConnectUI.uiOptions = options
      }
    }

    app.config.globalProperties.tonConnectUI = tonConnectUI
    app.config.globalProperties.setOptions = setOptions
  }
}

export {
  TonConnect
}
