<script setup lang="ts">
const props = defineProps({
  shouldScroll: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 5000,
  },
  isPlay: {
    type: Boolean,
    default: true,
  },
})

const cardDom = ref<any>(null)
const animation = ref<any>(null)

onMounted(() => {
  if (cardDom.value && props.shouldScroll) {
    animation.value = cardDom.value.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' },
      ],
      {
        duration: props.duration,
        easing: 'linear',
        fill: 'both',
        iterations: Number.POSITIVE_INFINITY,
      },
    )
  }
})

watch(() => props.isPlay, (newVal, _oldVal) => {
  if (!animation.value)
    return

  if (newVal)
    animation.value.play()

  else
    animation.value.pause()
}, { immediate: true })
</script>

<template>
  <div
    ref="cardDom"
    class="flex flex-col items-center justify-center my-2"
  >
    <slot />
  </div>
</template>
