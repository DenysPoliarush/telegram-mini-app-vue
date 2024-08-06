<template>
  <TonConnectButton />

  <pre class="mt-2">
address: {{ address }}
state: {{ state }}
wallet: {{ wallet }}
connection restored: {{ restored }}
  </pre>

  <div class="my-4 flex flex-wrap gap-2">
    <el-button @click="open">open</el-button>
    <el-button @click="close">close</el-button>
  </div>
</template>

<script lang="ts" setup>
const { address } = useTonAddress(true)
const { wallet } = useTonWallet()
const { close, open, state } = useTonConnectModal()
const { restored } = useIsConnectionRestored()

async function connectToWallet () {
  const connectedWallet = await open()
  // Do something with connectedWallet if needed
  console.log(connectedWallet)
}

// Call the function
connectToWallet().catch(error => {
  console.error('Error connecting to wallet:', error)
})
</script>
