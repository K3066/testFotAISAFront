<script setup>

import SavedConfigCard from "@/components/SavedConfigs/SavedConfigCard.vue";
import {onBeforeMount, reactive} from "vue";
import axios from "axios";
const largeMachine = reactive([])
const standardMachine = reactive([])

async function getAllConfigs(){
  return await axios.get(`http://localhost:5000/api/v1/configs`)
}
onBeforeMount(() => {
  getAllConfigs().then(response=>{
    response.data.data.forEach((config) => {
      if (config.size.name === 'standard'){
        standardMachine.push(config)
      } else if(config.size.name === 'large') {
        largeMachine.push(config)
      }
    })
  })
})

</script>

<template>
  <div class="configs-list">
    <div class="configs-list__name">Стандартные кофемашины</div>
    <div class="configs-list__standard" v-if="standardMachine.length > 0">
      <saved-config-card v-for="(config) in standardMachine" :name="config.configName" :size-name="config.size.text" :drinks-name="config.drinks.text" :size-value="config.size.name"/>
    </div>
    <div class="configs-list__name">Увеличенные кофемашины</div>
    <div class="configs-list__large">
      <saved-config-card v-for="config in largeMachine" :name="config.configName" :size-name="config.size.text" :drinks-name="config.drinks.text" :size-value="config.size.name"/>
    </div>
  </div>

</template>

<style lang="sass" scoped>
.configs-list
  max-width: 50%
  margin: 0 auto
  overflow: auto
  max-height: calc(100vh - 72px)
  &__standard, &__large
    display: grid
    grid-template-columns: repeat(1 ,1fr)
    grid-gap: 8px
    margin: 0 auto
    height: 100%
    overflow: auto
  &__name
    font-size: 18px
    margin: 8px
@media (min-width: 1024px)
  .configs-list
    &__standard, &__large
      grid-template-columns: repeat(3 ,1fr)
</style>