<template>
  <Alert message="Hello!" @close="handleAlertClose" />
</template>

<script lang="ts" setup>
import { Alert } from 'vue-tg'

const emit = defineEmits(['close'])

function handleAlertClose () {
  emit('close')
}
</script>
