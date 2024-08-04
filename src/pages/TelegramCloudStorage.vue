<template>
  <h1 class="font-medium">
    This object controls the cloud storage. Each bot can store up to 1024 items per user in the cloud storage.
  </h1>
  <pre>
storageKeys: {{ storageKeys }}
storageItem: {{ storageItem }}
storageItems: {{ storageItems }}
    </pre>

  <div class="my-4 flex flex-wrap gap-2">
    <el-button @click="onSetStorageItem">setStorageItem</el-button>
    <el-button @click="onGetStorageKeys">getStorageKeys</el-button>
    <el-button :disabled="!storageKeys.length" @click="onGetStorageItem">getStorageItem</el-button>
    <el-button :disabled="!storageKeys.length" @click="onGetStorageItems">getStorageItems</el-button>
    <el-button
      :disabled="!storageKeys.length"
      @click="onRemoveStorageItem(storageKeys[0])"
    >
      removeStorageItem
    </el-button>
    <el-button :disabled="!storageKeys.length" @click="onRemoveStorageItems">removeStorageItems</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useWebAppCloudStorage } from 'vue-tg'

const {
  setStorageItem,
  getStorageKeys,
  getStorageItem,
  getStorageItems,
  removeStorageItem,
  removeStorageItems
} = useWebAppCloudStorage()
const { generateRandomString } = useUtils()

const storageKeys = ref<string[]>([])
const storageItem = ref<string | null>()
const storageItems = ref<TIndexedObject<string>>({})

function onSetStorageItem () {
  const key = generateRandomString()
  const value = generateRandomString()
  setStorageItem(key, value)
  storageKeys.value.push(key)
  storageItems.value[key] = value
}

async function onGetStorageKeys () {
  storageKeys.value = await getStorageKeys()
}
async function onGetStorageItem () {
  storageItem.value = await getStorageItem(storageKeys.value[0])
}
async function onGetStorageItems () {
  storageItems.value = await getStorageItems(storageKeys.value)
}
function onRemoveStorageItem (key: string) {
  delete storageItems.value[key]
  storageKeys.value = storageKeys.value.filter(k => k !== key)
  removeStorageItem(key)
}
function onRemoveStorageItems () {
  storageItems.value = {}
  storageItem.value = null
  storageKeys.value = []
  removeStorageItems(storageKeys.value)
}
</script>
