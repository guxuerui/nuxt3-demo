<script setup lang="ts">
const duration = 1500
const baseNumber = ref(0)

const cubicBezierNumber = useTransition(baseNumber, {
  duration,
  transition: [0.75, 0, 0.25, 1],
})

function toggle() {
  baseNumber.value = baseNumber.value === 100 ? 0 : 100
}
</script>

<template>
  <main class="text-center">
    <UButton @click="toggle">
      Transition
    </UButton>

    <p class="my-2">
      Cubic bezier curve: <b>{{ cubicBezierNumber.toFixed(2) }}</b>
    </p>
    <ClientOnly>
      <NuxtLink to="/hi/table">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      </NuxtLink>
      <InputEntry />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </main>
</template>

<style scoped>

</style>
