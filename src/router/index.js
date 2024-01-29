import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    }, {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }, {
      path: '/experiences',
      name: 'experiences',
      component: () => import('../views/ExperiencesView.vue')
    }, {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    }, {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
