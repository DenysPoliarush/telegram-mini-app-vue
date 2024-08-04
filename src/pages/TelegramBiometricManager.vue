<template>
  <pre>
    biometricType: {{ biometricType }}
    biometricDeviceId: {{ biometricDeviceId }}
    isBiometricInited: {{ isBiometricInited }}
    isBiometricAvailable: {{ isBiometricAvailable }}
    isBiometricTokenSaved: {{ isBiometricTokenSaved }}
    isBiometricAccessGranted: {{ isBiometricAccessGranted }}
    isBiometricAccessRequested: {{ isBiometricAccessRequested }}
    isBiometricAuthRequested: {{ isBiometricAuthRequested }}
    isBiometricManagerUpdated: {{ isBiometricManagerUpdated }}
    isBiometricTokenUpdated: {{ isBiometricTokenUpdated }}
  </pre>

  <div class="my-4 flex flex-wrap gap-2">
    <el-button @click="authenticateBiometric">authenticateBiometric</el-button>
    <el-button @click="openBiometricSettings">openBiometricSettings</el-button>
    <el-button @click="requestBiometricAccess">requestBiometricAccess</el-button>
    <el-button @click="updateBiometricToken('')">updateBiometricToken</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppBiometricManager } from 'vue-tg'

const {
  biometricType,
  biometricDeviceId,
  isBiometricInited,
  isBiometricAvailable,
  isBiometricTokenSaved,
  isBiometricAccessGranted,
  isBiometricAccessRequested,
  initBiometric,
  authenticateBiometric,
  onBiometricAuthRequested,
  onBiometricManagerUpdated,
  onBiometricTokenUpdated,
  openBiometricSettings,
  requestBiometricAccess,
  updateBiometricToken
} = useWebAppBiometricManager()

const isBiometricAuthRequested = ref(false)
const isBiometricManagerUpdated = ref(false)
const isBiometricTokenUpdated = ref(false)

initBiometric()

onBiometricAuthRequested(() => {
  isBiometricAuthRequested.value = true
})
onBiometricManagerUpdated(() => {
  isBiometricManagerUpdated.value = true
})
onBiometricTokenUpdated(() => {
  isBiometricTokenUpdated.value = true
})
</script>
