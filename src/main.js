// Import core Vue functions
import { createApp } from 'vue'

// Import Pinia (state management library)
import { createPinia } from "pinia";

// Import the root component (entry point of the Vue app)
import App from './App.vue'

// Import router configuration (for navigation)
import router from './router'

// Import jQuery (used by some plugins/libraries in your project)
import jQuery from 'jquery'

// Custom script for initializing UI logic after scripts load
import { initTestScript } from './assets/js/test.js'

// Utility function that dynamically loads external scripts
import { loadScript } from './utils/loadScript.js'

// Import your authentication store (Pinia store)
import { useAuthStore } from "@/stores/auth";

// Make jQuery available globally (so libraries expecting `$` or `jQuery` still work)
window.$ = jQuery
window.jQuery = jQuery

// Track whether all required scripts are loaded
let scriptsLoaded = {
  bootstrap: false,
  metismenu: false,
  simplebar: false,
  waves: false
}

// Helper function → checks if required scripts are loaded, then initializes UI
function checkAndInitialize() {
  if (scriptsLoaded.bootstrap && scriptsLoaded.metismenu && scriptsLoaded.waves) {
    console.log('✅ All scripts loaded, initializing...');
    initTestScript(); // Run custom script after all dependencies are ready
  }
}

// ----------------- External Scripts Loading -----------------

// Load Bootstrap
loadScript('/src/assets/libs/bootstrap/js/bootstrap.bundle.min.js')
  .then(() => {
    console.log('✅ Bootstrap loaded');
    // Ensure Bootstrap is globally available
    window.bootstrap = window.bootstrap || bootstrap;
    scriptsLoaded.bootstrap = true;
    checkAndInitialize(); // Check if all scripts are ready
  })
  .catch((err) => console.error('❌ Failed to load Bootstrap:', err))

// Load MetisMenu (for sidebar navigation menus)
loadScript('/src/assets/libs/metismenu/metisMenu.min.js')
  .then(() => {
    console.log('✅ MetisMenu loaded');
    scriptsLoaded.metismenu = true;
    checkAndInitialize();
  })
  .catch((err) => {
    console.error('❌ Failed to load MetisMenu:', err);
    scriptsLoaded.metismenu = true; // Mark as loaded (even with error) to avoid blocking
    checkAndInitialize();
  })

// Load SimpleBar (custom scrollbar library)
loadScript('/src/assets/libs/simplebar/simplebar.min.js')
  .then(() => {
    console.log('✅ SimpleBar loaded');
    scriptsLoaded.simplebar = true;
  })
  .catch((err) => console.error('❌ Failed to load SimpleBar:', err))

// Load Waves.js (ripple effect on buttons)
loadScript('/src/assets/libs/node-waves/waves.min.js')
  .then(() => {
    console.log('✅ Waves loaded');
    if (window.Waves) {
      window.Waves.init(); // Initialize ripple effects
    }
    scriptsLoaded.waves = true;
    checkAndInitialize();
  })
  .catch((err) => {
    console.error('❌ Failed to load Waves.js:', err);
    scriptsLoaded.waves = true;
    checkAndInitialize();
  })

// ----------------- Vue App Setup -----------------

// Create Vue application instance
const app = createApp(App);

// Create Pinia (state management) instance
const pinia = createPinia();

// Register Pinia in the Vue app
app.use(pinia);



// Register router in the Vue app
app.use(router);

// Rerun the Jquerry dependancies to endure it works


router.afterEach(() => {
  // Delay to ensure new DOM elements are mounted
  setTimeout(() => {
    console.log("🔄 Re-initializing UI scripts after route change");
    checkAndInitialize();
  }, 200);
});


// Access the authentication store
const auth = useAuthStore();

// Rehydrate authentication state from localStorage
// (e.g., load user info + token so refresh doesn’t log user out)
auth.initFromLocalStorage();

// Mount the Vue app to the #app element in index.html
app.mount('#app');
