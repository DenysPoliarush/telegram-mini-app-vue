<template>
  <div>
    <p class="font-medium">Navigation</p>

    <pre>
invoiceCallback: {{ invoiceCallback }}
    </pre>

    <div class="flex flex-wrap gap-2">
      <el-button
        v-for="btn in buttons"
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

<script setup lang="ts">
import { useWebAppNavigation } from 'vue-tg'

const { onInvoiceClosed, /* openInvoice, */ openLink, openTelegramLink, switchInlineQuery } = useWebAppNavigation()
const invoiceCallback = ref()

onInvoiceClosed((e: any) => {
  invoiceCallback.value = e
})

const buttons = ref<{title: string; cb: () => void}[]>([
  {
    title: 'openInvoice',
    cb: () => '' // openInvoice()
  },
  {
    title: 'openWebLink - X.com',
    cb: () => openLink('https://x.com/home')
  },
  {
    title: 'openMiniApp',
    cb: () => openTelegramLink('https://t.me/my_first_mini_app_on_vue_bot/test_mini_app')
  },
  {
    title: 'openTelegramChanel',
    cb: () => openTelegramLink('https://t.me/+BnXU8HvHf2IxNDM6')
  },
  {
    title: 'switchInlineQuery',
    cb: () => switchInlineQuery('test', ['users'])
  }
])
</script>
