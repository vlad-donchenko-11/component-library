<template>
  <svg
    :class="className"
    :width="formattedSize"
    :height="formattedSize"
    xmlns:ex="http://www.w3.org/2000/svg"
  >
    <use
      :xlink:href="iconUrl"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>

</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed } from 'vue';
import { getIconMap } from '@/utils/svg-sprite';

const props = withDefaults(defineProps<{
  icon: string
  size?: string
}>(), {
  size: 'medium',
});

const className = computed<{ [key: string]: boolean}>(() => {
  const cl = 'svg-icon';

  return {
    [cl]: true,
    [`${cl} ${cl}--${props.icon}`]: true,
  };
});

const iconUrl = computed<string | undefined>(() => {
  const IconMap: Map<string, string> = getIconMap();

  return IconMap.has(props.icon) ? IconMap.get(props.icon) : IconMap.get('default');
});

const formattedSize = computed<number>(() => {
  switch (props.size) {
    case 'sm':
      return 12;
    case 'md':
      return 16;
    case 'lg':
      return 20;
    case 'xl':
      return 24;
    default:
      return 16;
  }
});
</script>

<style lang="scss">
  .svg-icon {
    fill: currentColor;
  }
</style>
