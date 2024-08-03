<template>
  <MainButton
    text="main button"
    color="#fff"
    textColor="#000"
    :visible="true"
    :disabled="false"
    :progress="true"
    @click="handleMainButton"
  />
</template>

<script lang="ts" setup>
import { MainButton } from 'vue-tg'

function handleMainButton () {
  // ...
}
</script>
