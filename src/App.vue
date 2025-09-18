<script setup>
import { useRoute } from "vue-router";
import LoaderVue from "./layouts/Loader.vue";
import HeaderVue from "./layouts/Header.vue";
import SideBar from "./layouts/Sidebar.vue";
import FooterVue from "./layouts/Footer.vue";
import MessageComposer from "./pages/Messenger/composeMessage.form.vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css"; // default styles


import router from "./router"; // your router file

// Start loader before route changes
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// Stop loader after route change
router.afterEach(() => {
  NProgress.done();
});


const route = useRoute();
</script>

<template>
  <LoaderVue />

  <!-- If route is login, just render the login component -->
  <div v-if="route.meta.layout === 'none'">
    <router-view />
  </div>

  <!-- Otherwise, render full dashboard layout -->
  <div v-else id="layout-wrapper">
    <MessageComposer />
    <HeaderVue />
    <SideBar />

    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <FooterVue />
    </div>
  </div>
</template>
