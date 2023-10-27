import { createRouter, createWebHashHistory } from 'vue-router'
import { componentList } from '../component.json'

function mapRoutes(components: string[]) {
  const routes: {
    path: string
    component: any
  }[] = []

  routes.push({
    path: '/',
    component: () => import('../pages/home/index.vue')
  })

  for (const comp of components) {
    const compPath = `../pages/${comp}/index.vue`
    routes.push({
      path: `/${comp}`,
      component: () => import(compPath)
    })
    console.log(compPath)
  }
  return routes
}

export const routes = mapRoutes(componentList)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

