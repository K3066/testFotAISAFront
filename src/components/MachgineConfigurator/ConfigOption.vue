<script setup>
const option = defineProps({
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "button"
    },
    text: {
      type: String,
      default: "button"
    }
})
const emit = defineEmits([`change`])
</script>

<template>
<div class="config-option" :id="`option-${option.name}`" @click="emit('change', option)">
  <div class="config-option__icon"></div>
  <div class="config-option__name">
    {{option.text}}
  </div>
</div>
</template>

<style scoped lang="sass">
.config-option
  border-radius: 4px
  padding: 4px 8px
  display: flex
  user-select: none
  &:not(:last-child)
    margin-bottom: 8px
  &:hover
    color: hsla(160, 100%, 37%, 1)
.active
  background: var(--color-background-soft)
</style>