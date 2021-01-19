import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from './plugins/primevue.config'
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(PrimeVue)
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('InputText', InputText)

app.use(store)
app.use(router)
app.mount('#app')
