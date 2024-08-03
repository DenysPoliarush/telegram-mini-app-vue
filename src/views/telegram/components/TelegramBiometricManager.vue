<template>
  <pre>
    {{ biometricData }}
  </pre>
</template>

<script lang="ts" setup>
import { useWebAppBiometricManager } from 'vue-tg'

const biometricData = ref()
onMounted(() => {
  biometricData.value = useWebAppBiometricManager()
  console.log(useWebAppBiometricManager())
})
</script>
