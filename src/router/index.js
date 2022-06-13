import { createRouter, createWebHistory } from 'vue-router'
import MainCategory from '../components/MainCategory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			component: MainCategory
		},
		{
			path: '/product',
			component: () => import('../components/MainPorduct.vue')
		},
	],
})

export default router