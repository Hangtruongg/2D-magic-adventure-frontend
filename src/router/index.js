import { createRouter, createWebHistory } from 'vue-router'
import GameCenter from '@/components/GameCenter.vue'
import WelcomeAmaze from '@/components/WelcomeAmaze.vue';

const routes = [
  {
    path: '/',
    component: WelcomeAmaze
  },
  {
    path: '/game',
    name: "game",
    component: GameCenter
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router // end step 1

