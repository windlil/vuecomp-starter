import { createApp } from 'vue'
import WindDesign from '../../../packages/components/src/index'
import './asset/style/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(WindDesign)

app.mount('#app')
