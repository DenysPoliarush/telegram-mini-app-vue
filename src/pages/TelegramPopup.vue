<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in buttons"
        :key="btn.title"
        type="primary"
        plain
        class="mb-2"
        @click="btn.cb"
      >
        {{ btn.title }}
      </el-button>
    </div>

    <pre>
callbackAfterClose: {{ callbackAfterClose }}
confirmCallback: {{ confirmCallback }}
alertCallback: {{ alertCallback }}
popupCallback: {{ popupCallback }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useWebAppPopup } from 'vue-tg'
const { onPopupClosed, showAlert, showConfirm, showPopup } = useWebAppPopup()

const callbackAfterClose = ref<string>()
const confirmCallback = ref()
const alertCallback = ref()
const popupCallback = ref()

onPopupClosed((e: any) => {
  callbackAfterClose.value = e
})

// Popup can show max 3 buttons
// id for buttons is needed if you want to return it in the callback and the popupClosed event.
const popupParams = {
  title: 'Popup title',
  message: 'Popup message',
  buttons: [
    // { id: 'ok', type: 'ok' },
    // { id: 'close',  type: 'close' },
    { id: 'cancel', type: 'cancel' },
    { id: 'default', type: 'default', text: 'default' }, // field "text" is required for this type
    { id: 'destructive', type: 'destructive', text: 'Remove' } // field "text" is required for this type
  ]
}

const buttons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'Show alert',
    cb: () => showAlert('Alert', () => { alertCallback.value = true })
  },
  {
    title: 'Show confirm',
    cb: () => showConfirm('Confirm', (e) => { confirmCallback.value = e })
  },
  {
    title: 'Show popup',
    cb: () => showPopup(popupParams, (buttonId) => { popupCallback.value = buttonId })
  }
])
</script>
