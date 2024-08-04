<template>
  <div class="relative flex flex-wrap justify-between gap-2">
    <el-button
      v-for="nav in navigation"
      :key="nav.name"
      type="primary"
      plain
      class="grow"
      @click="$router.push({ name: nav.name })"
    >
      {{ nav.label }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { defaultLayoutRoutes } from '@/router/routes'
import type { RouteRecordRaw } from 'vue-router'

interface INavItem {
  name: string
  label: string
}

const navigation = defaultLayoutRoutes.children?.reduce((acc: INavItem[], curr: RouteRecordRaw) => {
  if (curr.name !== 'home') {
    acc.push({
      name: curr.name as string,
      label: curr.meta?.label || ''
    })
  }

  return acc
}, [])
</script>
