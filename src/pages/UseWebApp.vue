<template>
  <div>
    <p class="text-2xl">Web app data</p>

    <pre>
initData: {{ initData }}
initDataUnsafe: {{ initDataUnsafe }}
version: {{ version }}
isVersionAtLeast: {{ isVersionAtLeast(version) }}
platform: {{ platform }}
isReady: {{ isReady }}
isPlatformUnknown: {{ isPlatformUnknown }}
isPlatform - macOs: {{ isPlatform('macos') }}
isPlatform - tdesktop: {{ isPlatform('tdesktop') }}
isFeatureSupported - BiometricManager: {{ isFeatureSupported('BiometricManager') }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useWebApp } from 'vue-tg'
const {
  initData,
  initDataUnsafe,
  version,
  platform,
  isReady,
  isPlatform,
  isPlatformUnknown,
  isFeatureSupported,
  isVersionAtLeast
} = useWebApp()

</script>
