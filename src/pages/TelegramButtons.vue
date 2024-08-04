<template>
  <div>
    <p class="text-xl font-medium mr-1">BackButton</p>
    <pre>
  isBackButtonVisible: {{ isBackButtonVisible }}
  isBackButtonClicked: {{ isBackButtonClicked }}
    </pre>

    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in backButtons"
        :key="btn.title"
        type="primary"
        plain
        class="grow"
        @click="btn.cb"
      >
        {{ btn.title }}
      </el-button>
    </div>

    <p class="text-xl font-medium mt-4">SettingsButton</p>
    <pre>
  isSettingsButtonVisible: {{ isSettingsButtonVisible }}
  isSettingsButtonClicked: {{ isSettingsButtonClicked }}
    </pre>

    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in settingsButtons"
        :key="btn.title"
        type="primary"
        plain
        class="grow"
        @click="btn.cb"
      >
        {{ btn.title }}
      </el-button>
    </div>

    <p class="text-xl font-medium mt-4">MainButton</p>
    <pre>
  mainButtonText: {{ mainButtonText }}
  mainButtonColor: {{ mainButtonColor }}
  isMainButtonActive: {{ isMainButtonActive }}
  isMainButtonVisible: {{ isMainButtonVisible }}
  mainButtonTextColor: {{ mainButtonTextColor }}
  isMainButtonProgressVisible: {{ isMainButtonProgressVisible }}
  isMainButtonClicked: {{ isMainButtonClicked }}
    </pre>

    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in mainButtons"
        :key="btn.title"
        type="primary"
        plain
        class="grow"
        @click="btn.cb"
      >
        {{ btn.title }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppBackButton, useWebAppSettingsButton, useWebAppMainButton } from 'vue-tg'

const router = useRouter()
const { generateRandomString, generateRandomHexColor, generateRandomBoolean } = useUtils()

const { isBackButtonVisible, hideBackButton, onBackButtonClicked, showBackButton } = useWebAppBackButton()
const {
  hideSettingsButton,
  isSettingsButtonVisible,
  onSettingsButtonClicked,
  showSettingsButton
} = useWebAppSettingsButton()

const {
  mainButtonText,
  mainButtonColor,
  isMainButtonActive,
  isMainButtonVisible,
  mainButtonTextColor,
  isMainButtonProgressVisible,
  hideMainButton,
  showMainButton,
  enableMainButton,
  disableMainButton,
  setMainButtonText,
  setMainButtonParams,
  onMainButtonClicked,
  hideMainButtonProgress,
  showMainButtonProgress
} = useWebAppMainButton()

const isBackButtonClicked = ref(false)
const isSettingsButtonClicked = ref(false)
const isMainButtonClicked = ref(false)

onBackButtonClicked(() => {
  isBackButtonClicked.value = true
  router.push({ name: 'home' })
})

onSettingsButtonClicked(() => {
  isSettingsButtonClicked.value = true
})

onMainButtonClicked(() => {
  isMainButtonClicked.value = true
})

const backButtons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'showBackButton',
    cb: () => showBackButton()
  },
  {
    title: 'hideBackButton',
    cb: () => hideBackButton()
  }
])

const settingsButtons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'showSettingsButton',
    cb: () => showSettingsButton()
  },
  {
    title: 'hideSettingsButton',
    cb: () => hideSettingsButton()
  }
])

const mainButtons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'showMainButton',
    cb: () => showMainButton()
  },
  {
    title: 'hideMainButton',
    cb: () => hideMainButton()
  },
  {
    title: 'enableMainButton',
    cb: () => enableMainButton()
  },
  {
    title: 'disableMainButton',
    cb: () => disableMainButton()
  },
  {
    title: 'setRandomText',
    cb: () => setMainButtonText(generateRandomString())
  },
  {
    title: 'setMainButtonParams',
    cb: () => generateRandomParams()
  },
  {
    title: 'showProgress',
    cb: () => showMainButtonProgress()
  },
  {
    title: 'hideProgress',
    cb: () => hideMainButtonProgress()
  }
])

function generateRandomParams () {
  setMainButtonParams({
    text: generateRandomString(),
    color: generateRandomHexColor(),
    text_color: generateRandomHexColor(),
    is_active: generateRandomBoolean(),
    is_visible: generateRandomBoolean()
  })
}
</script>
