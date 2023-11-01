<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'VcButton'
})

interface Prop {
  type: string
}

const props = defineProps<Prop>()

const classList = computed(() => {
  const { type } = props
  return {
    [`ea-button--${type}`]: type
  }
})
</script>
  
<template>
  <button class="ea-button" :class="classList">
    <slot>
      按钮
    </slot>
  </button>
</template>
  