import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import 'normalize.css'
//import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import './assets/css/index.less'
import { setupStore } from './store'
const app = createApp(App)
app.use(globalRegister)
//app.use(ElementPlus)
setupStore()
app.use(store)
app.use(router)
app.mount('#app')
