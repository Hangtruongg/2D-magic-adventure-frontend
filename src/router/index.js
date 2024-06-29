import { createRouter, createWebHistory } from 'vue-router'
// import GameCenter from '@/components/GameCenter.vue'
import GameContainer from '@/components/GameContainer.vue'
import WelcomeAmaze from '@/components/WelcomeAmaze.vue';
import Deathscreen from '@/components/Deathscreen.vue'
import SignUp from '@/components/SignUp.vue'
import Register from '@/components/Register.vue'
import Settings from '@/components/Settings.vue'
import AboutAmaze from '@/components/AboutAmaze.vue'
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeAmaze
    },
    {
      path: '/signUp',
      name:'signUp',
      component: SignUp
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/game',
      name: 'game',
      component: GameContainer,
      meta: { requiresAuth: true }
    },
    {
      path: '/deathscreen',
      name: 'deathscreen',
      component: Deathscreen,
      // meta: {requiresAuth: true}
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/aboutAmaze',
      name: 'aboutAmaze',
      component: AboutAmaze,
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Store the intended route to redirect to after login
    localStorage.setItem('redirectRoute', to.fullPath);
    try {
      const baseURL = import.meta.env.VITE_BACKEND_BASE_URL
      // Validate token on the server side
      const response = await axios.get(baseURL + '/validateToken');
      if (response.status === 200) {
        next(); // Token is valid, allow access to the route
      } else {
        next('/register'); // Token is invalid or expired, redirect to login
      }
    } catch (error) {
      console.error('Token validation failed:', error);
      next('/register'); // Handle validation failure
    }
  } else {
    next(); // Allow access to routes that do not require authentication
  }
});
export default router // end step 1