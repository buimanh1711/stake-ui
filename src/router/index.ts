import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import PublicSale from '../views/pages/PublicSale.vue';
import Stake from '../views/pages/Stake.vue';
import Layout from '@/views/layout/Default.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/ipo',
          name: 'ipo',
          component: PublicSale,
        },
        {
          path: '/stake',
          name: 'stake',
          component: Stake,
        },
      ],
    },
  ],
});

export default router;
