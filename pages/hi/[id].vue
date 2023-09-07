<script setup lang="ts">
const route = useRoute<'hi-id'>()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template>
  <div class="text-center">
    <div class="inline-block animate-bounce animate-duration-500 text-4xl">
      <div class="i-twemoji:waving-hand" />
    </div>
    <h3 class="text-2xl font-medium">
      Hi,
    </h3>
    <div class="text-xl">
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <p class="my-4 text-sm">
        <span class="opacity-50">Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <Counter />

    <div class="m-2 text-sm">
      <NuxtLink to="/">
        <UButton>Back</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
