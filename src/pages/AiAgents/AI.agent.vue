<template>
  <div class="row">
    <div class="col-12">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
        Toggle right offcanvas
      </button>

      <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom py-0  pr-0">
          <div class="d-flex align-items-center gap-2">
            <span class="text-muted">
              <button type="button" title="close Partnership details waves-effect"
                class="btn btn-white position-relative p-0 avatar-sm rounded-circle" data-bs-dismiss="offcanvas"
                aria-label="Close">
                <span class="avatar-title bg-transparent text-reset">
                  <i class="bx bx-arrow-back font-size-22"></i>
                </span>
              </button>
            </span>
            <h5 id="offcanvasRightLabel" class="mb-0">Partnership Details</h5>
          </div>

          <div>
            <div class="d-flex header-action-btn">

             
              <!-- Customize Icon -->
              <div class="d-inline-block d-lg-inline-block ms-1" title="Edit Partnership">
                <button type="button" class="btn header-item noti-icon waves-effect">
                  <i class="bx bx bx-edit-alt"></i>
                </button>
              </div>

              <!-- Customize Icon -->
               <div class="d-inline-block d-lg-inline-block ms-1" title="Change Logo">
                <button type="button" class="btn header-item noti-icon waves-effect">
                  <i class="bx bx bx-camera"></i>
                </button>
              </div>

            </div>

          </div>


          <button type="button" class="btn-close text-reset d-none" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>

        <div class="offcanvas-body p-0">
          <div class="w-100 d-flex align-items-center justify-content-center mb-0 p-3">
            <img class="bg-transparent" alt="Company-logo" src="../../assets/images/clients/homa-bay.png" />
          </div>

          <div class="p-3 border-top border-dark-subtle">
            <div class="row">
              <div class="col-6">
                <div
                  class="card border-primary-subtle bg-info bg-opacity-10 text-dark border-dark border-dashed mb-0 h-100">
                  <div class="card-body">
                    <i class="mdi mdi-cursor-default-click fs-1 text"></i>
                    <h5 class="fs-4 mt-4 mb-1 fw-bold">657</h5>
                    <div class="fs-12 text-reset fw-normal">Website Clicks</div>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div
                  class="card border-primary-subtle bg-success bg-opacity-10 text-dark border-dark border-dashed mb-0 h-100">
                  <div class="card-body">
                    <i class="mdi mdi-clock-time-five-outline fs-1 text"></i>
                    <h5 class="fs-4 mt-4 mb-1 fw-bold">56</h5>
                    <div class="fs-12 text-reset fw-normal">Months since Addition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="px-4 py-2 fw-bold text-dark sticky-top bg-dark bg-opacity-10 text-black border-top border-bottom border-dark-subtle">
            Details
          </div>

          <div class="list-group">
            <div class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Partner Name</h5>
                <small>3 Jan 2023</small>
              </div>
              <p class="mb-1">Homa Bay County Government</p>
              <small class="text-muted">Organization Name</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Abbreviation</h5>
              </div>
              <p class="mb-1">HBCG</p>
              <small class="text-muted">Short form</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Organization Type</h5>
              </div>
              <p class="mb-1">Government Agency</p>
              <small class="text-muted">Business category</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Country</h5>
              </div>
              <p class="mb-1">Kenya</p>
              <small class="text-muted">Location</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Partnership Type</h5>
              </div>
              <p class="mb-1">Strategic Partner</p>
              <small class="text-muted">Collaboration level</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Products</h5>
              </div>
              <p class="mb-1">
                <span class="badge bg-primary me-1">RCMS</span>
                <span class="badge bg-primary me-1">Document Management</span>
                <span class="badge bg-primary">Digital Services</span>
              </p>
              <small class="text-muted">Associated products</small>
            </div>

            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Description</h5>
              </div>
              <p class="mb-1">Strategic partnership for digital transformation initiatives and public service delivery
                enhancement through technology solutions.</p>
              <small class="text-muted">Partnership overview</small>
            </div>
          </div>

          <div
            class="px-4 py-2 fw-bold text-dark sticky-top bg-dark bg-opacity-10 text-black border-top border-bottom border-dark-subtle">
            Links
          </div>

          <div class="list-group">
            <div class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Website</h5>
                <small>Updated 3 Jan 2023</small>
              </div>
              <p class="mb-1"><a href="https://www.homabay.go.ke" target="_blank"
                  class="text-decoration-none">www.homabay.go.ke</a></p>
              <small class="text-muted">Clicks: 847 | Last clicked: 2 hours ago</small>
            </div>

            <div class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">RCMS Self Service Portal</h5>
                <small>Updated 8 Feb 2023</small>
              </div>
              <p class="mb-1"><a href="https://portal.homabay.go.ke" target="_blank"
                  class="text-decoration-none">portal.homabay.go.ke</a></p>
              <small class="text-muted">Clicks: 293 | Last clicked: 1 day ago</small>
            </div>

            <div class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Social Media</h5>
                <small>Updated 15 Mar 2023</small>
              </div>
              <p class="mb-1"><a href="https://twitter.com/homabaygovt" target="_blank"
                  class="text-decoration-none">@homabaygovt</a></p>
              <small class="text-muted">Clicks: 107 | Last clicked: 3 days ago</small>
            </div>
          </div>

          <div class="p-3">
            <!-- Additional actions or footer content -->
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" type="button">
                <i class="bx bx-edit-alt me-1"></i> Edit Partnership
              </button>
            </div>
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
  name: "KPLC-Agent",
  meta: { title: 'KPLC AI Agent | CS Payments Dashboard' }
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
    offcanvasEl.removeEventListener('shown.bs.offcanvas', () => { })
    offcanvasEl.removeEventListener('hidden.bs.offcanvas', () => { })
  }
})
</script>
<style scoped></style>