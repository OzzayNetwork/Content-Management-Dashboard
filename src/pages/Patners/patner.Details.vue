<template>
  <div class="row">
    <div class="col-12">
      <button 
        class="btn btn-primary" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>

      <div 
        class="offcanvas offcanvas-end" 
        tabindex="-1" 
        id="offcanvasRight" 
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 id="offcanvasRightLabel">Partnership Details</h5>
          <button 
            type="button" 
            class="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body p-0">
          <div class="w-100 d-flex align-items-center justify-content-center mb-0 p-3">
            <img 
              class="bg-transparent" 
              alt="Company-logo" 
              src="../../assets/images/clients/homa-bay.png"
            />
          </div>

          <div class="px-4 py-3 fw-bold text-dark border-top border-bottom sticky-top bg-light">
            Details
          </div>

          <div class="p-3">
            <!-- Sidebar body content goes here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

// Define component name and meta
defineOptions({
  name: "PartnerSidebar",
  meta: { title: 'Partner Sidebar' }
})

let previousTitle = document.title // store whatever the parent page had

onMounted(() => {
  const offcanvasEl = document.getElementById('offcanvasRight')

  if (offcanvasEl) {
    // When sidebar opens → update title
    offcanvasEl.addEventListener('shown.bs.offcanvas', () => {
      previousTitle = document.title
      document.title = 'Partner Details - Homa Bay County Government'
    })

    // When sidebar closes → restore title
    offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
      document.title = previousTitle
    })
  }
})

// Clean up events if component is unmounted
onBeforeUnmount(() => {
  const offcanvasEl = document.getElementById('offcanvasRight')
  if (offcanvasEl) {
    offcanvasEl.removeEventListener('shown.bs.offcanvas', () => {})
    offcanvasEl.removeEventListener('hidden.bs.offcanvas', () => {})
  }
})
</script>
<style scoped>  
</style>