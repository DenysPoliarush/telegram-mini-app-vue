<template>
  <div>
    <div>
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

    Confirmed: {{ isConfirmed }}

    <TelegramAlert v-if="isAlertShown" @close="isAlertShown = false" />
    <TelegramBackButton /> <!-- BackButton is not supported in version 6.0 -->
    <TelegramBiometricManager /> <!-- BiometricManager is not supported in version 6.0 -->
    <TelegramClosingConfirmation /> <!-- ClosingConfirmation is not supported in version 6.0 -->
    <TelegramConfirm v-if="isConfirmShown" @ok="isConfirmed = $event" @close="isConfirmShown = false" />
    <TelegramExpandedViewport />
    <TelegramMainButton />
    <TelegramPopup v-if="isPopupShown" @close="isConfirmShown = false" />
  </div>
</template>

<script lang="ts" setup>
const isAlertShown = ref(false)
const isConfirmShown = ref(false)
const isPopupShown = ref(false)

const isConfirmed = ref<boolean | string>('not opened')

const buttons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'Show alert',
    cb: () => { isAlertShown.value = true }
  },
  {
    title: 'Show confirm',
    cb: () => { isConfirmShown.value = true }
  },
  {
    title: 'Show popup',
    cb: () => { isPopupShown.value = true }
  }
])

</script>
