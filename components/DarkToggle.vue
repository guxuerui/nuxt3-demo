<script setup lang="ts">
const colorMode = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => colorMode.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    color="gray"
    variant="ghost"
    aria-label="Theme"
    class="!p-0"
    @click="toggleDark"
  />
</template>
