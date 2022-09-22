<template>
  <button
   type="button"
   :class="classes"
   @click="handleButtonClick"
  >
    <IconSvg
      v-if="isShowStartIcon"
      :icon="props.icon"
      :size="props.iconSize"
      class="button__svg-icon button__svg-icon--start"
    />
    {{ props.label }}
    <IconSvg
      v-if="isShowEndIcon"
      :icon="props.icon"
      :size="props.iconSize"
      class="button__svg-icon button__svg-icon--end"
    />
  </button>
</template>

<script lang="ts" setup>
import {
  defineProps, defineEmits, withDefaults, computed,
} from 'vue';
import IconSvg from '@/components/Icon/IconSvg.vue';

const props = withDefaults(defineProps<{
  label: string
  type?: string
  icon?: string
  size?: string
  iconSize?: string
  rounded?: boolean
  variant?: string
  iconPosition?: string
}>(), {
  rounded: true,
  size: 'medium',
  variant: 'primary',
  iconSize: 'medium',
  iconPosition: 'start',
});

const emit = defineEmits<{(e: 'click'): void }>();

const classes = computed<{ [key: string]: boolean }>(() => {
  const cl = 'button';

  return {
    [cl]: true,
    [`${cl}--rounded`]: props.rounded,
    [`${cl}--primary`]: props.variant === 'primary',
    [`${cl}--secondary`]: props.variant === 'secondary',
    [`${cl}--medium`]: props.size === 'medium',
    [`${cl}--small`]: props.size === 'small',
    [`${cl}--large`]: props.size === 'large',
  };
});

const isShowStartIcon = computed<boolean>(() => !!(props.icon && props.iconPosition === 'start'));
const isShowEndIcon = computed<boolean>(() => !!(props.icon && props.iconPosition === 'end'));

const handleButtonClick = () => {
  emit('click');
};
</script>

<style lang="scss">
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    line-height: 1.4;
    font-family: inherit;
    font-weight: 700;
    border: none;
    appearance: none;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .button--primary {
    color: var(--white);
    background-color: var(--primary1);

    &:hover {
      background-color: var(--primary2);
    }

    &:active {
      background-color: var(--primary3);
    }

    &:disabled {
      color: var(--netural-dark-grey5);
      background-color: var(--netural-light-grey3);
    }
  }

  .button--secondary {
    color: var(--primary1);
    background-color: var(--primary5);

    &:hover {
      background-color: var(--primary8);
    }

    &:active {
      background-color: var(--primary4);
    }

    &:disabled {
      color: var(--netural-light-grey5);
      background-color: var(--netural-light-grey4);
    }
  }

  .button--small {
    padding: 6px 12px;
    font-size: 12px;
  }

  .button--medium {
    padding: 8px 16px;
    font-size: 14px;
  }

  .button--large {
    padding: 10px 20px;
    font-size: 16px;
  }

  .button--small .button__svg-icon--start {
    margin-right: 6px;
  }

  .button--medium .button__svg-icon--start {
    margin-right: 8px;
  }

  .button--large .button__svg-icon--start {
    margin-right: 8px;
  }

  .button--small .button__svg-icon--end {
    margin-left: 6px;
  }

  .button--medium .button__svg-icon--end {
    margin-left: 8px;
  }

  .button--large .button__svg-icon--end {
    margin-left: 8px;
  }

  .button--rounded {
    border-radius: 20px;
  }
</style>
