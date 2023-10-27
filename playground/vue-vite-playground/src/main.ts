import { createApp } from 'vue'
import WindDesign from '../../../packages/components/src/index'
import './asset/style/index.scss'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(WindDesign)
app.use(router)
app.mount('#app')
