import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home.vue";
import PublicSale from "../views/pages/PublicSale.vue";
import Layout from "@/views/layout/Default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          path: "/ipo",
          name: "ipo",
          component: PublicSale,
        },
      ],
    },
  ],
});

export default router;
