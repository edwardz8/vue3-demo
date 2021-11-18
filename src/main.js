import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BlokInk from 'storyblok-design-system'
import 'storyblok-design-system/dist/storyblok-design-system.css'

createApp(App).use(store).use(BlokInk).use(router).mount('#app')
