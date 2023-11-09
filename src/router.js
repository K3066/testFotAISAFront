import {createRouter, createWebHistory} from "vue-router";

export const Router = createRouter({
  routes: [

    {
      path: "/configurator",
      name: "home",
      component: () => import('@/components/MachgineConfigurator/CoffeeMachineConfigurator.vue')
    },
    {
      path: "/saved_configs",
      name: "saved_configs",
      component: () => import('@/components/SavedConfigs/SavedConfigsList.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/configurator'
    },
  ],
  history: createWebHistory()
})