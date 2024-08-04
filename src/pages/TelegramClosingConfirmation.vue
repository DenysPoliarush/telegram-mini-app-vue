<template>
  <p>
    isClosingConfirmationEnabled: {{ isClosingConfirmationEnabled }}
  </p>

  <div class="my-4 flex flex-wrap gap-2">
    <el-button @click="disableClosingConfirmation">disableClosingConfirmation</el-button>
    <el-button @click="enableClosingConfirmation">enableClosingConfirmation</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppClosingConfirmation } from 'vue-tg'

const {
  disableClosingConfirmation,
  enableClosingConfirmation,
  isClosingConfirmationEnabled
} = useWebAppClosingConfirmation()
</script>
