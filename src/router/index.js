import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "@/pages/Home.vue";
import MenuCategories from "@/pages/PosMenus/MenuCategories.vue";
import TestPage from "@/components/testing.vue";

// Error pages
import NotFound404 from "@/pages/ErrorPages/NotFound4042.vue";
import Forbidden403 from "@/pages/ErrorPages/Forbidden4032.vue";

import MenuProducts from "@/pages/PosMenus/MenuProducts.vue";

// Partners
import PatnerList from "@/pages/Patners/PatnerList.vue";
import PatnerAdd from "@/pages/Patners/PatnerAdd.vue";

const routes = [
  {
    path: "/test-page",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/partners/list",
    name: "PatnerList",
    component: PatnerList,
  },
  {
    path: "/partners/add",
    name: "PatnerAdd",
    component: PatnerAdd,
  },
  {
    path: "/MenuCategories",
    name: "MenuCategories",
    component: MenuCategories,
    meta: { requiresAuth: true }, // 🔒 protected
  },
  {
    path: "/MenuProducts",
    name: "MenuProducts",
    component: MenuProducts,
    meta: { requiresAuth: true }, // 🔒 protected
  },

  // 403 Forbidden
  {
    path: "/403",
    name: "Forbidden",
    component: Forbidden403,
  },

  // 404 Not Found (catch-all must be last)
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Global Navigation Guard
router.beforeEach((to, from, next) => {
  // Example authentication state (replace with real auth logic)
  const isAuthenticated = false; // 🔒 e.g., check localStorage or Vuex

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Forbidden" });
  } else {
    next();
  }
});

export default router;
