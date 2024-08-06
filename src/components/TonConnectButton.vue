<template>
  <div
    :id="buttonRootId"
    :style="{ width: 'fit-content' }"
  />
</template>

<script setup lang="ts">
const { updateOptions } = useTonConnectUI()

const buttonRootId = 'ton-connect-button'

onMounted(() => {
  updateOptions({ buttonRootId })
})

onUnmounted(() => {
  updateOptions({ buttonRootId: null })
})
</script>
