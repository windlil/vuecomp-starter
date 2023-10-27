<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  menu: any[]
}

defineProps<Props>()

const router = useRouter()

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="menu">
    <div v-for="item in menu" class="menu-item" @click="to(item.path)">
      {{ item.path }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  height: 100%;
  width: 200px;
  overflow: auto;
  color: #fff;
  background-color: #3b3b3b;

  .menu-item {
    cursor: pointer;
    padding: 10px;
    
    &:hover {
      background-color: #616161;
    }
  }
}
</style>