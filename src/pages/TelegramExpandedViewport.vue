<template>
  <div>
    <p>isExpanded: {{ isExpanded }}</p>
    <p>viewportHeight: {{ viewportHeight }}</p>
    <p>viewportStableHeight: {{ viewportStableHeight }}</p>
    <p>isVerticalSwipesEnabled: {{ isVerticalSwipesEnabled }}</p>
    <p>onViewportChangedData: {{ onViewportChangedData }}</p>

    <div class="my-4 flex flex-wrap gap-2">
      <el-button @click="expand">expand</el-button>
      <el-button @click="enableVerticalSwipes">enableVerticalSwipes</el-button>
      <el-button @click="disableVerticalSwipes">disableVerticalSwipes</el-button>
    </div>

    <ExpandedViewport />
  </div>
</template>

<script lang="ts" setup>
import { ExpandedViewport, useWebAppViewport } from 'vue-tg'

const {
  isExpanded,
  viewportHeight,
  viewportStableHeight,
  isVerticalSwipesEnabled,
  expand,
  onViewportChanged,
  enableVerticalSwipes,
  disableVerticalSwipes // TODO: doesn't work on Android
} = useWebAppViewport()

const onViewportChangedData = ref()

onViewportChanged((e: any) => {
  onViewportChangedData.value = e
})
</script>
