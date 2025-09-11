import { createApp } from 'vue'
import App from './App2.vue'
import router from './router' // ✅ Import router
import jQuery from 'jquery'
import { initTestScript } from './assets/js/test.js'
import { loadScript } from './utils/loadScript.js'

// jQuery global
window.$ = jQuery
window.jQuery = jQuery

let scriptsLoaded = {
  bootstrap: false,
  metismenu: false,
  simplebar: false,
  waves: false
}

// Function to check if all scripts are loaded and initialize
function checkAndInitialize() {
  if (scriptsLoaded.bootstrap && scriptsLoaded.metismenu && scriptsLoaded.waves) {
    console.log('✅ All scripts loaded, initializing...');
    initTestScript();
  }
}

// Bootstrap bundle
loadScript('/src/assets/libs/bootstrap/js/bootstrap.bundle.min.js')
  .then(() => {
    console.log('✅ Bootstrap loaded');
    window.bootstrap = window.bootstrap || bootstrap;
    scriptsLoaded.bootstrap = true;
    checkAndInitialize();
  })
  .catch((err) => console.error('❌ Failed to load Bootstrap:', err))

// MetisMenu - IMPORTANT: Wait for it to load before initializing
loadScript('/src/assets/libs/metismenu/metisMenu.min.js')
  .then(() => {
    console.log('✅ MetisMenu loaded');
    scriptsLoaded.metismenu = true;
    checkAndInitialize();
  })
  .catch((err) => {
    console.error('❌ Failed to load MetisMenu:', err);
    // Still allow initialization without MetisMenu
    scriptsLoaded.metismenu = true;
    checkAndInitialize();
  })

// SimpleBar
loadScript('/src/assets/libs/simplebar/simplebar.min.js')
  .then(() => {
    console.log('✅ SimpleBar loaded');
    scriptsLoaded.simplebar = true;
  })
  .catch((err) => console.error('❌ Failed to load SimpleBar:', err))

// Waves
loadScript('/src/assets/libs/node-waves/waves.min.js')
  .then(() => {
    console.log('✅ Waves loaded');
    if (window.Waves) {
      window.Waves.init();
    }
    scriptsLoaded.waves = true;
    checkAndInitialize();
  })
  .catch((err) => {
    console.error('❌ Failed to load Waves.js:', err);
    // Still allow initialization without Waves
    scriptsLoaded.waves = true;
    checkAndInitialize();
  })

// ✅ Create and mount Vue app with router
createApp(App)
  .use(router) // <-- This is what was missing
  .mount('#app')