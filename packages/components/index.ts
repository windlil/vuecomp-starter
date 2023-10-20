import type { App } from 'vue'
import * as components from './src/index'
export * from './src/index'

const install = (app: App) => {
  for (let n in components) {
    app.use((components as any)[n])
  }
}

export default install