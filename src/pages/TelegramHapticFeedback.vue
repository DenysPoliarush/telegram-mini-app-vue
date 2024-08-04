<template>
  <div>
    <p class="font-medium">Haptic Feedback.</p>
    <p class="mb-2">
      Haptic/Tactile feedback is the use of advanced vibration patterns and
      waveforms to convey information to a user or operator.
    </p>

    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in buttons"
        :key="btn.title"
        type="primary"
        plain
        class="grow"
        @click="btn.cb"
      >
        {{ btn.title }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWebAppHapticFeedback } from 'vue-tg'

const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()

const buttons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'light',
    cb: () => impactOccurred('light')
  },
  {
    title: 'medium',
    cb: () => impactOccurred('medium')
  },
  {
    title: 'heavy',
    cb: () => impactOccurred('heavy')
  },
  {
    title: 'rigid',
    cb: () => impactOccurred('rigid')
  },
  {
    title: 'soft',
    cb: () => impactOccurred('soft')
  },
  {
    title: 'error',
    cb: () => notificationOccurred('error')
  },
  {
    title: 'success',
    cb: () => notificationOccurred('success')
  },
  {
    title: 'warning',
    cb: () => notificationOccurred('warning')
  },
  {
    title: 'selectionChanged',
    cb: () => selectionChanged()
  }
])
</script>
