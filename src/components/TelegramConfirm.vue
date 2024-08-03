<template>
  <Confirm message="Hello?" @close="handleConfirmClose" />
</template>

<script lang="ts" setup>
import { Confirm } from 'vue-tg'

const emit = defineEmits<{
  ok: [value: boolean]
  close: []
}>()

function handleConfirmClose (ok: boolean) {
  emit('ok', ok)
  emit('close')
}
</script>
