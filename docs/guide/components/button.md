---
sider_text="按钮 button"
---
:::

## 大、中、小三种尺寸

<div >
  <button style="font-size: 20px;">123</button>
</div>

::: details Show Code

```vue
<script setup lang="ts">
function onClick (e: Event) {
  console.log('click')
}
</script>
<template>
  <Button size="small" @click="onClick">Small</Button>
  <Button @click="onClick">Default</Button>
  <Button size="large" @click="onClick">Large</Button>
</template>

```

:::
