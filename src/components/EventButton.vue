<script setup>
defineProps({
  name: {
    type: String,
    default: 'Кнопка'
  }
})
const emit = defineEmits(['emitClick'])
</script>

<template>
<div class="save-btn" @click="emit('emitClick')">
  <span class="save-btn__text">{{name}}</span>
</div>
</template>

<style scoped lang="sass">
.save-btn
  padding: 4px 8px
  border-radius: 4px
  color: var(--vt-c-white)
  background: hsla(160, 100%, 37%, 1)
  user-select: none
  width: fit-content
  width: -moz-fit-content
  text-align: center
  min-width: 32px
  &:active
    background: hsla(160, 100%, 37%, 1)
    color: #222222
</style>