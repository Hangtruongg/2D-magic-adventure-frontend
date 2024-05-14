import { createRouter, createWebHistory } from 'vue-router'
// import GameCenter from '@/components/GameCenter.vue'
import GameContainer from '@/components/GameContainer.vue'
import WelcomeAmaze from '@/components/WelcomeAmaze.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeAmaze
    },
    {
      path: '/game',
      name: 'game',
      component: GameContainer
    }
  ]
})
export default router // end step 1