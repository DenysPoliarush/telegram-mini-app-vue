<template>
  <div class="relative">
    <el-button class="absolute ml-auto w-8 h-8 md:hidden mb-2" @click="isOpened = !isOpened">
      <IconDoubleArrow class="text-gray-950" :class="{ 'rotate-180': !isOpened }" />
    </el-button>

    <div
      class="absolute top-0 left-0 bg-white h-full z-20 shadow-xl md:static flex flex-col shrink-0 p-4"
      :class="isOpened ? 'w-[220px]' : 'w-0 hidden' "
    >
      <el-button class="ml-auto w-8 h-8 md:hidden mb-2" @click="isOpened = !isOpened">
        <IconDoubleArrow class="text-gray-950" :class="{ 'rotate-180': !isOpened }" />
      </el-button>

      <el-button
        v-for="nav in navigation"
        :key="nav.name"
        type="primary"
        plain
        class="hover:underline capitalize mb-2 !mx-0"
        @click="$router.push({ name: nav.name })"
      >
        {{ t(nav.label) }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultLayoutRoutes } from '@/router/routes'
const { $routeNames } = useGlobalProperties()
const { t } = useI18n()

const isOpened = ref(true)

// todo: you can import your default layout routes and map them with your navigation needs
const navigation = [
  ...defaultLayoutRoutes.children?.map(route => ({
    name: route.name as string,
    label: route.meta?.label || ''
    // ...
  })) || [],

  // todo: you add here your custom and not dependant to any layouts nav items
  {
    label: 'auth.login',
    name: $routeNames.login
  }
]
</script>
