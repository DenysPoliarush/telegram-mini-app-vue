<template>
  <div class="default-layout flex flex-col h-full overflow-hidden bg-white">
    <div class="flex flex-grow overflow-hidden">
      <div class="flex-1 overflow-auto p-4">
        <router-view />
      </div>
    </div>

    <BackButton :visible="route.name !== 'home'" @click="onBackButtonClicked" />
  </div>
</template>

<script setup lang="ts">
import { BackButton } from 'vue-tg'

const router = useRouter()
const route = useRoute()

function onBackButtonClicked () {
  router.back()
}
</script>

<style lang="scss" scoped>
  .default-layout:has(.alert) .header {
    @apply border-b-2 border-danger bg-red-200
  }
</style>
