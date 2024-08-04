<template>
  <div>
    <pre>
qrText: {{ qrText }}
qrClosed: {{ qrClosed }}
    </pre>

    <div class="my-4 flex flex-wrap gap-2">
      <el-button @click="showScanQrPopup">showScanQrPopup</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppQrScanner } from 'vue-tg'

const {
  showScanQrPopup,
  closeScanQrPopup,
  onQrTextReceived,
  onScanQrPopupClosed
} = useWebAppQrScanner()

const qrText = ref('')
const qrClosed = ref(false)

onQrTextReceived((e: string) => {
  qrText.value = e
  closeScanQrPopup()
})

onScanQrPopupClosed(() => {
  qrClosed.value = true
})
</script>
