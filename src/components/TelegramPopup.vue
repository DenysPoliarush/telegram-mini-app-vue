<template>
  <Popup
    message="I'm message"
    title="I'm title"
    :buttons
    @close="handlePopupClose"
  />
</template>

<script lang="ts" setup>
import { Popup } from 'vue-tg'
const emit = defineEmits<{
  close: []
}>()

const buttons = ref([
  { type: 'ok' },
  { type: 'close' },
  { type: 'cancel' }
  // { type: 'default' }
  // { type: 'destructive' }
])

function handlePopupClose (/* buttonId: string */) {
  emit('close')
}
</script>
