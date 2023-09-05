<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<style scoped>

</style>
