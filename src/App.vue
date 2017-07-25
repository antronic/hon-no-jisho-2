<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import 'node_modules/normalize-scss/sass/normalize'; @include normalize();
@import 'node_modules/material-design-lite/src/material-design-lite';
@import url('https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:400,600');
@import 'scss/_import';

body {
  font-size: 16px;
  font-family: $fontstack;
}
</style>
