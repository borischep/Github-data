import { createApp, provide, h } from "vue"
import ElementPlus from 'element-plus'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'element-plus/dist/index.css'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'

import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "./apollo-client"

import RepositoriesData from '@/components/pages/Repositories/RepositoriesData.vue'
import ProfileData from '@/components/pages/Repositories/ProfileData.vue'

const routes = [
  { path: '/', component: RepositoriesData },
  { path: '/profile', component: ProfileData },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

loadFonts()

const app = createApp({
  setup() {
      provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app
  .use(ElementPlus)
  .use(router)
  .mount('#app')