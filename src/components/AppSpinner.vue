<template>
  <IconSvg
    icon="spinner"
    class="spinner"
    :size="props.size"
    :style="spinnerColor"
  />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue';
import IconSvg from '@/components/Icon/IconSvg.vue';

const props = withDefaults(defineProps<{
  size: string
  color: string
}>(), {
  size: 'medium',
  color: 'var(--primary1)',
});

const spinnerColor = computed<string>(() => `color: ${props.color}`);
</script>

<style lang="scss">
.spinner {
  animation: spinnerAnimation 0.6s infinite linear;
}

@keyframes spinnerAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
