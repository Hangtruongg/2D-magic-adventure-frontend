import { createRouter, createWebHistory } from 'vue-router'
// import GameCenter from '@/components/GameCenter.vue'
import GameContainer from '@/components/GameContainer.vue'
import WelcomeAmaze from '@/components/WelcomeAmaze.vue';
import SignUp from '@/components/SignUp.vue'
import Register from '@/components/Register.vue'

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
    },
    {path: '/signUp',
      name:'signUp',
      component: SignUp
    },
    {path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
export default router // end step 1