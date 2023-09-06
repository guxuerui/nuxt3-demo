<script setup lang="ts">
const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text" autocomplete="off"
      class="px-4 py-2 my-4 w-60 text-center bg-transparent border rounded border-gray-200 dark:border-gray-700 outline-none focus:ring-1 focus:ring-teal-500"
      @keydown.enter="go"
    >
    <div>
      <UButton
        class="mx-3 text-sm"
        :disabled="!name"
        @click="go"
      >
        GO
      </UButton>
    </div>
  </div>
</template>
