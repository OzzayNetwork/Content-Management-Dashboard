import { createRouter, createWebHistory } from "vue-router";

// Authentication pages
import Login from "@/pages/Authentication/Auth.Login.vue";
import ResetPassword from "@/pages/Authentication/Auth.resetPassword.vue";
import AuthVerifyOtp from "../pages/Authentication/Auth.verify.otp.vue";

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

//test pages
import PartnerTestList from "@/pages/Patners/Partner.List.Test.vue";

//n progress importing into router

// Define routes

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "none",title: "Account Login "  }
  },
  {
    path: "/Reset-Password",
    name: "ReserPassword",
    component: ResetPassword,
    meta: { layout: "none",title: "Account Password Reset" }
  },
  {
    path: "/Verify-otp",
    name: "OtpVerification",
    component: AuthVerifyOtp,
    meta: { layout: "none",title: "OTP Verrification" }
  },
  {
    path: "/test-page",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true, title: "Main Dashboard "  }, // Password protected
  },
  {
    path: "/partners/list",
    name: "PatnerList",
    component: PatnerList,
     meta: { requiresAuth: true, title: "List of Partners"  }, // Password protected
  },
  {
    path: "/partners/testList",
    name: "PatnerListTest",
    component: PartnerTestList,
     meta: { requiresAuth: true, title: "Testing List of Partners" }, // Password protected
  },
  {
    path: "/partners/add",
    name: "PatnerAdd",
    component: PatnerAdd,
     meta: { requiresAuth: true, title: "Add A Partner"  }, // Password protected
  },
  {
    path: "/MenuCategories",
    name: "MenuCategories",
    component: MenuCategories,
    meta: { protected: true, title: "Menu Categories" }, // 🔒 protected
  },
  {
    path: "/MenuProducts",
    name: "MenuProducts",
    component: MenuProducts,
    meta: { protected: true, title: "Menu Products" }, // 🔒 protected
  },

  // 403 Forbidden
  {
    path: "/403",
    name: "Forbidden",
    component: Forbidden403,
     meta: {title: "Error 403 Protected Page"}
  },

  // 404 Not Found (catch-all must be last)
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound404,
    meta: {title: "Error 404 Page not Found"}
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

  if (to.meta.protected && !isAuthenticated) {
    next({ name: "Forbidden" });
  } else {
    next();
  }
});

export default router;
