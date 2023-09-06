<script setup lang="ts">

</script>

<template>
  <main class="text-center">
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
