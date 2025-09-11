<template>

  <!-- Page Content -->


  <div class="row">
    <div class="col-12">
      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
        <h4 class="mb-sm-0 font-size-18">All Partners</h4>
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">All Partners</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading">
    <LoaderVue />
  </div>
  <div v-else class="row">

    <div v-if="isEmpty" class="col-12 d-flex text-center align-items-center justify-content-center">
      <div class="col-12 col-md-6 col-lg-5 col-xl-4">
        <div class="card">
          <div class="card-body p-5 text-center">
            <!-- Empty Illustration -->
            <div class="mb-5 mt-3">
              <img src="../../assets/images/empty-states/undraw_selecting-team_zehd.svg" alt="No Partners"
                class="img-fluid" style="max-width: 250px; height: auto;" />
            </div>

            <!-- Headline -->
            <h3 class="text-black fw-bold mb-4 fs-2">
              No Partners Showcased Yet
            </h3>

            <!-- Description -->
            <p class="text-muted mb-4 fs-6 mx-auto text-black" style="max-width: 400px">
              Highlight your company’s collaborations by adding partners.
              Once added, partners will appear on your website to build trust, credibility, and showcase your business
              relationships.
              Examples: <i><b>"TechCorp", "AgriPlus", "Green Energy Ltd"</b></i>.
            </p>

            <!-- Action Button -->
            <div class="mt-5">
              <router-link to="/partners/add" class="btn btn-primary btn-lg px-4 py-3">
                🤝✨ Add Your First Partner
              </router-link>
            </div>

            <!-- Secondary Note -->
            <div class="mt-4 pt-3 border-top">
              <p class="text-muted mb-0 pb-0">
                <i class="fas fa-lightbulb me-1 text-warning"></i>
                Tip: Partners you add here will be displayed publicly on your website’s “Our Partners” section.
              </p>
            </div>
          </div>
        </div>

        <!-- Logo Footer -->
        <div class="mt-1 opacity-25">
          <img src="../../assets/images/favicon.svg" alt="Company Logo" class="img-fluid"
            style="max-width: 100px; height: auto; filter: brightness(0) invert(0);" />
        </div>
      </div>
    </div>

    <div v-else class="col-12">
      <div class="card">

        <div
          class="card-header bg-white d-flex justify-content-between align-items-center w-100 border-bottom-1 pb-3 border-bottom-1 border-bottom">
          <!-- filters -->
          <div class="me-3 text-nowrap filter-tool-bar-btns">
            <div class="btn-group">
              <button type="button" class="btn btn-light-brand d-none waves-effect me-2" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bx bxs-hide font-size-16 me-1 align-middle"></i> Hide fields
              </button>

              <div class="dropdown-menu p-4" style="width: 300px;">
                <div class="row">
                  <div class="col-12">
                    <h5 class="text-capitalize mb-0">Column Visibility</h5>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-order-id" data-column="0"
                        checked>
                      <label class="form-check-label" for="column-order-id">Member ID</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-customer-name"
                        data-column="1" checked>
                      <label class="form-check-label" for="column-customer-name">Name</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-region" data-column="2"
                        checked>
                      <label class="form-check-label" for="column-region">Region</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-worede" data-column="3"
                        checked>
                      <label class="form-check-label" for="column-worede">Worede</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-address" data-column="4"
                        checked>
                      <label class="form-check-label" for="column-address">Address</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-family-size"
                        data-column="5" checked>
                      <label class="form-check-label" for="column-family-size">Family Size</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-registration-date"
                        data-column="6" checked>
                      <label class="form-check-label" for="column-registration-date">Registration Date</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-last-payment"
                        data-column="7" checked>
                      <label class="form-check-label" for="column-last-payment">Last Payment</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-status" data-column="8"
                        checked>
                      <label class="form-check-label" for="column-status">Status</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-registered-by"
                        data-column="9" checked>
                      <label class="form-check-label" for="column-registered-by">Registered By</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-next-payment"
                        data-column="10" checked>
                      <label class="form-check-label" for="column-next-payment">Next Payment</label>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input toggle-column" type="checkbox" id="column-annual-payment"
                        data-column="11" checked>
                      <label class="form-check-label" for="column-annual-payment">Annual Payment</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="button" id="showAllColumns" class="btn btn-sm btn-outline-primary me-2">Show
                      All</button>
                    <button type="button" id="hideAllColumns" class="btn btn-sm btn-outline-danger">Hide All</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-group">
              <button data-v-a1a839f4="" type="button" class="btn btn-light-brand waves-effect"><i data-v-a1a839f4="" class="mdi mdi-chart-bar font-size-16 align-middle me-2"></i>Chart</button>

              <div class="dropdown-menu p-4" style="width: 300px;">
                <div class="row">
                  <div class="col-12">
                    <h5 class="text-capitalize mb-0">Sort by field</h5>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="sort-field-select" class="form-label">Field</label>
                      <select class="form-select" id="sort-field-select">
                        <option value="" selected disabled>Select field</option>
                        <option value="0">Member ID</option>
                        <option value="1">Name</option>
                        <option value="2">Region</option>
                        <option value="3">Worede</option>
                        <option value="4">Address</option>
                        <option value="5">Family Size</option>
                        <option value="6">Registration Date</option>
                        <option value="7">Last Payment</option>
                        <option value="8">Status</option>
                        <option value="9">Registered By</option>
                        <option value="10">Next Payment</option>
                        <option value="11">Annual Payment</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="mb-3">
                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="sortDirection" id="btnradio4" value="asc"
                          autocomplete="off" checked>
                        <label class="btn btn-outline-secondary" for="btnradio4"><i class="bx bx-sort-up"></i>
                          Ascending</label>

                        <input type="radio" class="btn-check" name="sortDirection" id="btnradio6" value="desc"
                          autocomplete="off">
                        <label class="btn btn-outline-secondary" for="btnradio6"><i class="bx bx-sort-down"></i>
                          Descending</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-4">
                    <button type="button" id="applySort" class="btn btn-primary w-100">Apply Sort</button>
                  </div>
                  <div class="col-12 mt-2">
                    <button type="button" id="clearSort" class="btn btn-outline-danger w-100"><i
                        class="bx bx-trash me-1"></i> Clear Sort</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-light-brand waves-effect mx-2" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="mdi mdi-calendar-month font-size-16 me-1 align-middle"></i> Date Range
              </button>

              <div class="dropdown-menu p-4" style="width: 300px;">
                <div class="row">
                  <div class="col-12">
                    <h5 class="text-capitalize mb-0">Filter by date</h5>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="start-date-input" class="form-label">Filter By Option</label>
                      <select class="form-select" id="sort-field-select">
                        <option value="" selected="" disabled="">Select field</option>
                        <option value="0">Registrtation Date</option>
                        <option value="1">Last Payment date</option>

                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>

                  <div class="col-12">
                    <div class="mb-3">
                      <label for="start-date-input" class="form-label">Start Date</label>
                      <input type="date" class="form-control" id="start-date-input">
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="d-flex align-items-center justify-content-center w-100">
                      <i class="bx bx-transfer-alt rotate-90 h2 text-info"></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="end-date-input" class="form-label">End Date</label>
                      <input type="date" class="form-control" id="end-date-input">
                    </div>
                  </div>
                  <div class="col-12 mt-4">
                    <button type="button" id="applyDateFilter" class="btn btn-primary w-100">Apply Filter</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-light-brand waves-effect" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="mdi mdi-filter-outline font-size-16 me-1 align-middle"></i> Filter
              </button>

              <div class="dropdown-menu p-4" style="width: 300px;">
                <div class="row">
                  <div class="col-12">
                    <h5 class="text-capitalize mb-0">Filter by date</h5>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="start-date-input" class="form-label">Filter By Option</label>
                      <select class="form-select" id="sort-field-select">
                        <option value="" selected="" disabled="">Select field</option>
                        <option value="0">Registrtation Date</option>
                        <option value="1">Last Payment date</option>

                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <hr>
                  </div>

                  <div class="col-12">
                    <div class="mb-3">
                      <label for="start-date-input" class="form-label">Start Date</label>
                      <input type="date" class="form-control" id="start-date-input">
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="d-flex align-items-center justify-content-center w-100">
                      <i class="bx bx-transfer-alt rotate-90 h2 text-info"></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="end-date-input" class="form-label">End Date</label>
                      <input type="date" class="form-control" id="end-date-input">
                    </div>
                  </div>
                  <div class="col-12 mt-4">
                    <button type="button" id="applyDateFilter" class="btn btn-primary w-100">Apply Filter</button>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          <div class="btn-toolbar d-flex justify-content-between align-items-center w-100" role="toolbar">
            <div class="flex-grow-1">
              <div class="search-box mb-0 me-3">
                <div class="position-relative">
                  <input type="text" id="searchInput" class="form-control bg-light border-light rounded"
                    placeholder="Search..." spellcheck="false">
                  <i class="bx bx-search-alt search-icon"></i>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3">

              <button type="button" class="btn btn-light-brand waves-effect">
                <i class="mdi mdi-chart-timeline-variant font-size-16 align-middle me-2"></i>Activity Logs
              </button>
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" checked="">
                  <label class="btn btn-outline-primary mb-0" for="btnradio4"><i class="mdi font-size-16 align-middle mdi-view-grid-outline "></i></label>
                
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                  <label class="btn btn-outline-primary mb-0" for="btnradio5"><i class="mdi font-size-16 align-middle mdi-format-list-bulleted-square "></i></label>                
              </div>

              

              <router-link to="/partners/add" class="btn btn-primary waves-effect waves-light"> <i class="mdi-plus mdi font-size-16 align-middle me-2"></i>Add New Partner </router-link>

            </div>
          </div>
        </div>
       
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table verticle-align-middle">
                <thead class="text-uppercase table-info">
                  <tr>
                    <th class="px-4">Partner Details</th>
                    <th></th>
                    <th>Status</th>
                    <th>Clicks</th>
                    <th class="text-right pr-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4" width="200px">
                      <div>
                        <img class="img-thumbnail bg-transparent " alt="Company-logo" style="width: 200px; max-height: 70px; " src="../../assets/images/clients/1.png" data-holder-rendered="true"></img>
                      </div>
                    </td>
                    <td>
                      <div>
                          <h5 class="font-size-14 mb-1"><a href="#" class="text-dark">Homa Bay County</a></h5>
                          <p class="text-muted mb-0">County Government in Kenya</p>
                        </div>
                    </td>
                    <td>
                      <p class="mb-0 fw-bold text-truncate"><i class="mdi mdi-circle text-success me-1 "></i> Active</p>
                    </td>
                    <td>
                      <span class="badge badge-soft-dark fw-bold"> <i class="mdi mdi-cursor-default-click font-size-16 text-black"></i> 33 Clicks</span>
                    </td>
                    <td></td>
                  </tr>
                  
                  
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import LoaderVue from "@/layouts/Loader.vue";
import ImageUploader from '@/components/ImageUploader.vue';
import SelectSearchBox from '@/components/SelectSearchBox.vue';
import SingleToastVue from '@/components/SingleToast.vue';

const isEmpty = ref(false);


// Define component name and meta (this syntax is for Vue 3.3+)
defineOptions({
  name: "AddPartner",
  meta: { title: 'Add Partner' }
});

const isLoading = ref(true);
const router = useRouter();


onMounted(() => {
  // Set page title
  document.title = 'List Of Partners - CSPL CRM';

  // Simulate loading time or wait for data to load
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Adjust timing as needed
});
</script>

<style scoped>
/* Add any component-specific styles here */
.card-title {
  margin-bottom: 0;
}
</style>