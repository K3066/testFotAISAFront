<script setup>
import EventButton from "@/components/EventButton.vue";
import {ref} from "vue";

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  sizeName: {
    type: String,
    default: ''
  },
  sizeValue: {
    type: String,
    default: ''
  },
  drinksName: {
    type: String,
    default: ''
  },
  counterValue: {
    type: Number,
    default: 1
  }
})
const counter = ref(props.counterValue)
function plus(){
  ++counter.value
}
function minus(){
  if (counter.value <= 0){
    return null
  } else {
    --counter.value
  }
}

</script>

<template>
<div class="config-card">
  <div class="config-card__photo">
    <img :src="`machinePhotos/${sizeValue}.png`" alt="standardMachine">
  </div>
  <div class="config-card__info">
    <div>Конфигурация: {{sizeName}}</div>
    <div>Кол-во напитков: {{drinksName}}</div>
  </div>
  <div class="config-card__counter">
    <event-button name="-" @emitClick="minus"/>
    <div>{{counter}}</div>
    <event-button name="+" @emitClick="plus"/>
  </div>
</div>
</template>

<style scoped lang="sass">
.config-card
  padding: 8px
  border-radius: 8px
  border: 1px solid var(--color-border)
  &__photo
    text-align: center
    img
      width: 150px
  &__counter
    display: flex
    justify-content: space-between
    margin: 8px 0 0 0
</style>