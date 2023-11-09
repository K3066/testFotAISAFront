<script setup>
import MainMenu from "./mainMenu/mainMenu.vue";
</script>

<template>
<header>
  <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <main-menu/>
  <div class="wrapper"></div>
</header>
</template>

<style scoped lang="sass">
header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 16px
  .logo
    height: 40px
    width: 40px
  .folder-name
    margin: 0 16px
    font-size: 2rem
  .wrapper
    width: 40px
</style>