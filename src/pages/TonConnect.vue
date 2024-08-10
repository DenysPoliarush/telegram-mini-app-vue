<template>
  <div class="flex justify-end">
    <TonConnectButton />
  </div>

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
</script>
