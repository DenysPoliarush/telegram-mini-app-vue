import { CHAIN, toUserFriendlyAddress } from '@tonconnect/ui'

export function useTonAddress (userFriendly = true) {
  const { wallet } = useTonWallet()

  const address = computed(() => {
    if (wallet.value) {
      return userFriendly
        ? toUserFriendlyAddress(
          wallet.value.account.address,
          wallet.value.account.chain === CHAIN.TESTNET
        )
        : wallet.value.account.address
    } else {
      return ''
    }
  })

  return {
    address
  }
}
