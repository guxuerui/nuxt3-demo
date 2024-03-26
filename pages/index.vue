<script setup lang="ts">
const duration = ref(5000)

const baseNumber = ref(0)

const cubicBezierNumber = useTransition(baseNumber, {
  duration,
  transition: [0.75, 0, 0.25, 1],
})

function toggle() {
  baseNumber.value = baseNumber.value === 100 ? 0 : 100
}

const items = ref<string[]>(['a', 'b', 'c', 'd'])
const isPlay = ref(true)
</script>

<template>
  <main class="text-center">
    <div
      class="bg-teal-500 overflow-hidden h-[530px]"
      @mouseenter="isPlay = false"
      @mouseleave="isPlay = true "
    >
      <Caresoul
        v-for="(item, index) in items"
        :key="index"
        :should-scroll="items.length > 3"
        :duration="duration"
        :is-play="isPlay"
      >
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-fill w-full rounded-t-lg h-64 md:h-auto md:w-32 md:rounded-none md:rounded-l-lg ml-2"
            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
            alt=""
          >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021-{{ item }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </Caresoul>
    </div>
    <UButton class="my-4" @click="toggle">
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

    <div class="my-4 dark:text-green-500">Test Theme Mode</div>
  </main>
</template>

<style scoped>

</style>
