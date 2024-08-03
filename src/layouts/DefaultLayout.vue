<template>
  <div class="default-layout flex flex-col h-full overflow-hidden">
    <Header />

    <div class="flex flex-grow overflow-hidden">
      <div class="flex-1 overflow-auto p-4 pt-10 md:pt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .default-layout:has(.alert) .header {
    @apply border-b-2 border-danger bg-red-200
  }
</style>
