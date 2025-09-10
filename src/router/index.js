import { createRouter, createWebHistory } from "vue-router";

// Import views

import Home from "@/pages/Home.vue";
import MenuCategories from "@/pages/PosMenus/MenuCategories.vue";
import NotFound404 from "@/pages/NotFound404.vue";
import MenuProducts from "@/pages/PosMenus/MenuProducts.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/MenuCategories',
    name: 'MenuCategories',
    component: MenuCategories,
  },
  {
    path: '/MenuProducts',
    name: 'MenuProducts',
    component: MenuProducts,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
