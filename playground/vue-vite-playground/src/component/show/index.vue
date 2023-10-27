<script setup lang="ts">
import Menu from '../menu/index.vue'
import { routes } from '../../router/index'

console.log(routes)
</script>

<template>
  <div class="show">
    <div class="top">
 
    </div>
    <div class="center">
      <Menu :menu="routes" />
      <div class="main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  border-radius: 15px;
  background-color: #dfdfdf;

  .top {
    width: 100%;
    height: 50px;
    background-color: #303030;
  }

  .center {
    display: flex;
    height: 100%;
  }
}
</style>
