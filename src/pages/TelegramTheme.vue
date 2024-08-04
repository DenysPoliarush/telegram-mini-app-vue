<template>
  <div>
    <pre>
themeParams: {{ themeParams }}
colorScheme: {{ colorScheme }}
headerColor: {{ headerColor }}
backgroundColor: {{ backgroundColor }}
isThemeChanged: {{ isThemeChanged }}
    </pre>

    <div class="my-4 flex flex-wrap gap-2">
      <el-button @click="setRandomHeaderColor">setHeaderColor</el-button>
      <el-button @click="setRandomBackgroundColor">setBackgroundColor</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppTheme } from 'vue-tg'

const {
  themeParams,
  colorScheme,
  headerColor,
  backgroundColor,
  onThemeChanged,
  setHeaderColor,
  setBackgroundColor
} = useWebAppTheme()
const { generateRandomHexColor } = useUtils()

const isThemeChanged = ref()

onThemeChanged(() => {
  isThemeChanged.value = true
})

function setRandomHeaderColor () {
  const color = generateRandomHexColor()
  setHeaderColor(color)
}

function setRandomBackgroundColor () {
  const color = generateRandomHexColor()
  setBackgroundColor(color)
}

</script>
