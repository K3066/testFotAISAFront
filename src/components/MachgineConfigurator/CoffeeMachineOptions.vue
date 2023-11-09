<script setup>
import ConfigOption from "@/components/MachgineConfigurator/ConfigOption.vue";
defineProps({
  options: {
    type: Array,
    default: []
  },
  activeOption: {
    type: Number,
    default: 0
  },
  groupName: {
    type: String,
    default: 'Группа параметров'
  }
})
const emit = defineEmits([`emitChangeSize`])
function changeSize(option){
  emit('emitChangeSize', option)
}
</script>

<template>
<div class="configs">
  <div class="config__name">{{ groupName }}</div>
  <config-option v-for="(option, index) in options" :class="{'active': index === activeOption}" :name="option.name" :text="option.text" @change="changeSize(option)"/>
</div>
</template>

<style scoped lang="sass">
.configs
  border-radius: 8px
  display: flex
  flex-direction: column
  border: 1px solid var(--color-border)
  padding: 16px
  margin-bottom: 16px
  width: 100%
  &__name
    white-space: nowrap
.configuration__options
  .configs:not(:last-child)
    margin-bottom: 16px
</style>