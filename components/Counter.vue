<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <UButton color="orange" size="xl" class="rounded-full p-2" @click="dec()">
      <div class="i-carbon-subtract" />
    </UButton>
    <div class="font-mono w-14 m-auto inline-block">
      {{ count }}
    </div>
    <UButton color="pink" size="xl" class="rounded-full p-2" @click="inc()">
      <div class="i-carbon-add" />
    </UButton>
  </div>
</template>
