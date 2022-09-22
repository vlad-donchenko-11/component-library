<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AppButton
    label="Next Step"
    size="large"
    variant="primary"
    icon="arrow-right"
    icon-position="end"
  />

  <AppButton
    label="Next Step"
    variant="secondary"
  />
  <AppSpinner/>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppSpinner from '@/components/AppSpinner.vue';
import AppButton from '@/components/Button/AppButton.vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppSpinner,
    AppButton,
    HelloWorld,
  },
});
</script>

<style lang="scss">
:root {
  --white: #FFFFFF;
  --primary: #2F5BDD;
  --primary1: #4975F6;
  --primary2: #6E9EFD;
  --primary3: #A3C5F8;
  --primary4: #DCE7FE;
  --primary5: #F2F4FD;
  --primary8: #e4ecff;
  --netural-light-grey3: #F0F2F3;
  --netural-light-grey4: #F7F8FA;
  --netural-light-grey5: #A7B4C4;
  --netural-dark-grey5: #A7B4C3;
}

@font-face {
  font-family: "Mulish";
  font-display: swap;
  src: url("./assets/fonts/Mulish-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Mulish";
  font-display: swap;
  src: url("./assets/fonts/Mulish-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;

  &::before {
    box-sizing: inherit;
  }

  &::after {
    box-sizing: inherit;
  }
}

#app {
  line-height: 1.4;
  font-family: "Mulish", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
