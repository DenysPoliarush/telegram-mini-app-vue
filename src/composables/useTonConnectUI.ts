import type { TonConnectUI, TonConnectUiOptions } from '@tonconnect/ui'

export function useTonConnectUI () {
  const internalInstance = getCurrentInstance()
  const tonConnectUI = ref<TonConnectUI>(internalInstance?.appContext.config.globalProperties.tonConnectUI)

  const updateOptions = (options: TonConnectUiOptions) => {
    return internalInstance?.appContext.config.globalProperties.setOptions(options)
  }

  return {
    tonConnectUI,
    updateOptions
  }
}
