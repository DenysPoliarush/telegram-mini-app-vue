<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <el-button
        type="primary"
        plain
        class="mb-2"
        @click="shareToStory('https://google.com')"
      >
        shareToStory
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Hover to inspect type
import { useWebAppShare } from 'vue-tg'

const { shareToStory } = useWebAppShare()
</script>
