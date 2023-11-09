<script setup>
import {onBeforeMount, reactive} from "vue";
import CoffeeMachineOptions from "@/components/MachgineConfigurator/CoffeeMachineOptions.vue";
import SaveBtn from "@/components/EventButton.vue";
import axios from "axios";

const sizeOptions = [
  {id: 0, name: "standard", text: `Стандартная`},
  {id: 1, name: "large", text: "Увеличенная"},
]
const drinksOptions = [
  {id: 0, name: 'six', text: '6 напитков'},
  {id: 1, name: 'eight', text: '8 напитков'},
  {id: 2, name: 'twelve', text: '12 напитков'},
]

const configuration = {
  sizeValue: reactive({
    id: 0,
    name: '',
    text: '',
  },),
  drinksValue: reactive({
    id: 0,
    name: '',
    text: ''
  },)
}

function changeSize(option) {
  configuration.sizeValue.id = option.id
  configuration.sizeValue.name = option.name
  configuration.sizeValue.text = option.text
}

function changeDrinks(option) {
  configuration.drinksValue.id = option.id
  configuration.drinksValue.name = option.name
  configuration.drinksValue.text = option.text
}

async function saveConfiguration() {
  let post = {
    name: '',
    size: {
      name: '',
      text: '',
    },
    drinks: {
      name: '',
      text: ''
    }
  }
  post.name = `${configuration.sizeValue.text} кофемашина на ${configuration.drinksValue.text}`
  post.size.name = `${configuration.sizeValue.name}`
  post.size.text = `${configuration.sizeValue.text}`
  post.drinks.name = `${configuration.drinksValue.name}`
  post.drinks.text = `${configuration.drinksValue.text}`
  post.counter = 1
  await axios.post('http://localhost:5000/api/v1/configs', post)
}

onBeforeMount(() => {
  changeSize(sizeOptions[0])
  changeDrinks(drinksOptions[0])
})
</script>

<template>
  <div class="configuration">
    <div class="configuration__name">
      <span class="configuration__size">{{ configuration.sizeValue.text }} кофемашина </span>
      <span class="configuration__drinks">на {{ configuration.drinksValue.text }}</span></div>
    <div class="configuration__container">
      <div class="configuration__photo">
        <img :src="`machinePhotos/${configuration.sizeValue.name}.png`" alt="standardMachine">
      </div>
      <div class="configuration__options">
        <coffee-machine-options group-name="Размер кофемашины" :options="sizeOptions"
                                :active-option="configuration.sizeValue.id"
                                @emitChangeSize="changeSize"/>
        <coffee-machine-options group-name="Количество напитков" :options="drinksOptions"
                                :active-option="configuration.drinksValue.id"
                                @emitChangeSize="changeDrinks"/>
        <save-btn name="Добавить в хранилище" @emitClick="saveConfiguration"/>

      </div>

    </div>
    <div class="configuration__bottom">
    </div>
  </div>
</template>

<style scoped lang="sass">
.configuration
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 0 auto
  max-width: 50%
  overflow: auto
  max-height: calc(100vh - 72px)
  position: relative

  &__name
    font-weight: 600
    font-size: 20px
    margin-bottom: 8px

  &__container
    display: flex
    width: 100%
    flex-direction: column
    justify-content: center


  &__photo
    width: 100%
    height: 300px
    min-height: 364px
    margin: 0 0 16px 0
    border-radius: 8px
    display: flex
    justify-content: center
    border: 1px solid var(--color-border)
    overflow: hidden
    padding: 8px

    img
      margin: 0 auto
      height: 100%

  &__bottom
    display: flex
    align-items: end
    justify-content: right
    width: 100%

@media (min-width: 1024px)
  .configuration
    flex-direction: column

    &__container
      flex-direction: row
      justify-content: center

      .configs:not(:last-child)
        margin-bottom: 16px

    &__photo
      width: 50%
      margin: 0 16px 0 0

</style>