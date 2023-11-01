import DefaultTheme from 'vitepress/theme'
import './style/index.scss'

// 全局引入组件库（开发环境）
import VcDesign from '../../../packages/components/src/index'
import '../../../packages/components/style/index.scss'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(VcDesign)
  }
}