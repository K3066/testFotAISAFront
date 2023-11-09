<script setup>
import MainMenu__point from "@/components/mainMenu/menuPoint.vue";
const menuPoints = [
  {name: "Конфигуратор", link: 'configurator'},
  {name: "Хранилище конфигураций", link: 'saved_configs'},
]
</script>

<template>
  <div class="main-menu">
    <main-menu__point v-for="point in menuPoints" :name="point.name" :link="point.link"/>
  </div>
</template>

<style scoped lang="sass">
.main-menu
  display: flex
  margin: 0 2em
</style>