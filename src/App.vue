<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import HeaderVue from "./layouts/Header.vue";
import LoaderVue from "./layouts/Loader.vue";
import SideBar from "./layouts/Sidebar.vue";
import SelectPickrTest from "./components/SelectPickrTest.vue";
import SelectSearchBox from "./components/SelectSearchBox.vue";
import imageUploader from "./components/ImageUploader.vue";
import SingleToastVue from "./components/SingleToast.vue";
import FooterVue from "./layouts/Footer.vue";
import MessageComposer from "./pages/Messenger/composeMessage.form.vue";

</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <LoaderVue />

  <div id="layout-wrapper">
    <MessageComposer />
    <HeaderVue />
    <SideBar />
   
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
           <router-view />
        </div>
      </div>
      <FooterVue/>
    </div>
  </div>
</template>
