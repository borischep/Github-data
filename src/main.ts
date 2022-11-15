import { createApp, provide, h } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'

import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "./apollo-client"

loadFonts()

const app = createApp({
  setup() {
      provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app
  .use(ElementPlus)
  .mount('#app')