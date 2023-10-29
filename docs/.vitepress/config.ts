import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: `vuecomp-starter`,
  description: 'Amazing UI 组件库',
  base: '/vuecomp-starter/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],

  themeConfig: {
    algolia: {
      appId: 'SHDNEYGA8Z',
      apiKey: '91419401b0b0efd31b610e54e5b97249',
      indexName: 'vue-amazing-ui'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      {
        text: '链接',
        items: [
          { text: 'My Github', link: 'https://github.com/themusecatcher' },
          { text: 'My CSDN', link: 'https://blog.csdn.net/Dandrose?type=blog' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],
    sidebar,
  }
})
