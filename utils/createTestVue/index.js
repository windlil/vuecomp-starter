import fs from 'node:fs'
import chalk from 'chalk'
import '../../config/env.js'

const pagesPath = './playground/vue-vite-playground/src/pages'

function createTemplate() {
  const css = process.env.CSS_PREPROCESSOR
  return `<script setup lang="ts">

</script>

<template>
  <div>
    component
  </div>
</template>

<style scoped lang="${css}">

</style>
`
}

function createPage() {

  const commands = process.argv.splice(2)
  if (commands.length === 0) {
    console.log(chalk.red('缺少必要参数'))
    return
  }
  const template = createTemplate()  
  for (let i = 0; i < commands.length; i++) {
    const path = `${pagesPath}/${commands[i]}`
    const target = `${path}/index.vue`
  
    fs.mkdir(path, {
      recursive: true,
    }, (err) => {
      if (!err) {
        fs.writeFile(target, template, (err) => {
          if (!err) {
            console.log(chalk.green('新测试组件生成完成，位置:', target))
          } else {
            console.log('新测试组件生成错误', err)
          }
        })
      } else {
        console.log('创建测试组件失败', err)
        return
      }
    })
  }
}

createPage()