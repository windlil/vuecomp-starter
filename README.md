# vuecomp-starter

## 介绍
开源的 Vue3 + Typescript 组件库开发模板，简单轻松构建功能完善的组件库，按照约定的目录编排来进行开发，使开发者只需关注组的开发以及说明文档的编写，无需关注其他繁琐的配置。

相信许多小伙伴都希望能自己开发出一套组件库，这是很有成就感的一件事，但是大部分人都困在组件库开发的前期构建以及打包阶段，而vuecomp-starter就是为此而生。

## 特性
- 约定式开发，大幅减轻开发者工作量
- 已经完成组件库前期构建和打包阶段，只需要关注到组件的开发
- 按照约定目录进行开发，打包后的组件库能够支持按需导入，完美配合TreeShaking
- 集成Vitepress，按照约定位置创建文件会自动配置路由，只需要关注文档内容的编写
- 对测试环境支持约定式路由写法，无需编写路由文件
- 配备了完善的自动化创建脚本，减少繁琐的文件创建过程。
- 通过简单的修改环境变量来修改开发方式

## 快速上手
```
# install degit
npm  i -g degit

# clone starter
degit windlil/vuecomp-starter [your project name]

# switch to your project directory
cd [your project name]

# install dependence
pnpm i

# open docs
pnpm docs:dev
```

## scripts命令介绍
```
"build": "gulp -f packages/script/build/index.ts",
"component:create": "node ./utils/create/index.js",
"comp:create": "node ./utils/createComponent/index.js",
"comp:play": "pnpm run -C playground/vue-vite-playground dev",
"comp:new": "node ./utils/createTestVue/index.js",
"docs:dev": "vitepress dev docs --port 8000",
"docs:new": "node ./utils/createVitepressComp/index.js",
"docs:build": "vitepress build docs"
```
