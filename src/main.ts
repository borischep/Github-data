import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'

const app = 

loadFonts()

createApp(App)
  .use(ElementPlus)
  .mount('#app')