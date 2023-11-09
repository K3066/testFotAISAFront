<script setup>
defineProps({
  name: {
    type: String,
    default: "Кнопка"
  },
  link: {
    type: String,
    default: "/"
  }
})
</script>

<template>
  <router-link :to="`/${link}`" class="main-menu__point" active-class="main-menu__point-active">
    <div>{{ name }}</div>
  </router-link>
</template>

<style scoped lang="sass">
.main-menu__point
  display: flex
  border-radius: 4px
  padding: 4px 8px
  white-space: nowrap
  font-size: 16px
  align-items: center
  margin-right: 8px

.main-menu__point-active
  background: var(--color-background-soft)
  font-size: 16px

</style>