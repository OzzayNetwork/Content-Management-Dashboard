import { createRouter, createWebHistory } from "vue-router";

// Import views

import Home from "@/pages/Home.vue";
import MenuCategories from "@/pages/PosMenus/MenuCategories.vue";
import NotFound404 from "@/pages/NotFound4042.vue";
import MenuProducts from "@/pages/PosMenus/MenuProducts.vue";

//patners
import PatnerList from "@/pages/Patners/PatnerList.vue";
import PatnerAdd from "@/pages/Patners/PatnerAdd.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/partners/list',
    name: 'PatnerList',
    component: PatnerList,
  },

  {
    path: '/partners/add',
    name: 'PatnerAdd',
    component: PatnerAdd,
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
