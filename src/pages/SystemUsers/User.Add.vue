<template>
  <div class="container-fluid">
    <!-- Page Title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18">Add User</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/users/list">System Users</router-link>
              </li>
              <li class="breadcrumb-item active">Add User</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Content -->
    <div v-if="isLoading">
      <LoaderVue />
    </div>
    <div v-else class="row">
      <SingleToastVue
        :toastType="toastType"
        :toastMessage="toastMessage"
      />

      <div class="col-sm-12 col-lg-8 offset-lg-2">
        <div class="card">
          <div class="card-header d-none">
            <h4 class="card-title">New User Registration</h4>
            <p class="card-title-desc text-muted mb-0">
              Register a new system user with appropriate role and status.
            </p>
          </div>

           <div class="card-header text-center px-5">
            <h4 class="card-title">New User Registration</h4>
            <p class="card-title-desc text-muted mb-0">
              Register a new system user with appropriate role and status.
            </p>
          </div>

          <div class="card-body p-5">
            <div class="row">
              <!-- Profile Picture -->
              <div class="col-12 mb-3 d-none">
                <div class="d-flex">
                  <div class="mb-0 d-flex align-items-center justify-content-center">
                    <img class="rounded-circle avatar-xl" :src="previewUrl" alt="">
                    
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="text-muted d-flex flex-column align-items-start justify-content-center">
                      <h5 class="mb-1 text-black">Profile Picture</h5>
                      <p class="">Accepted format: PNG/SVG. Less than 2 MB</p>
                      <label
                        for="profilePicUpload"
                        type="button"
                        class="btn btn-light waves-effect mb-0"
                      >
                        <i
                          class="bx font-size-16 align-middle me-2"
                          :class="hasLogoSelected ? 'bx-revision' : 'bx-image-add'"
                        ></i>
                        {{ hasLogoSelected ? 'Change Picture' : 'Upload Picture' }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="w-100 d-flex justify-content-center align-items-center mb-5 flex-column">
                   <div class="profile-pic-cont position-relative">
                      <img class="rounded-circle avatar-xl" :src="previewUrl" alt="" style="width: 200px; height: 200px;"/>
                      <label for="profilePicUpload" type="button" class="btn btn-primary  waves-effect waves-light rounded-circle profile-pic-btn" data-bs-toggle="tooltip" title="Select Profile Picture" fdprocessedid="0yglcf" ><i class="bx bx-camera align-middle"></i></label>

                      <!-- image croping component -->
                       <ImageUploader
                        inputId="profilePicUpload"
                        @image-selected="handleImageSelected"
                        @show-toast="handleToast"
                        :aspect-ratio="selectedRatio"
                      />
                   </div>
                   <div class="text-center mt-3 row align-items-center justify-content-center">
                      <div class="col-sm-12 col-12 col-md-10 col-lg-8 col-xl-7">
                        <h5 class="mb-1 text-black">Upload Profile Picture</h5>
                      <p class="text-muted">Please upload a clear and professional image. Accepted formats: PNG, SVG, or JPEG. <strong>Maximum file size: 2 MB.</strong></p>
                      </div>
                    </div>

                </div>
              </div>

              <!-- First Name -->
              <div class="col-6">
                <label for="firstName" class="form-label">First Name</label>
               <input
                v-focus
                type="text"
                id="firstName"
                class="form-control mb-4"
                v-model="userForm.first_name"
                placeholder="Enter first name"
                autofocus
                />

              </div>

              <!-- Last Name -->
              <div class="col-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  class="form-control mb-4"
                  v-model="userForm.last_name"
                  placeholder="Enter last name"
                />
              </div>

              <!-- Email -->
              <div class="col-6">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control mb-4"
                  v-model="userForm.email"
                  placeholder="Enter personal email"
                />
              </div>

              <!-- Company Email -->
              <div class="col-6">
                <label for="companyEmail" class="form-label">Company Email</label>
                <input
                  type="email"
                  id="companyEmail"
                  class="form-control mb-4"
                  v-model="userForm.company_email"
                  placeholder="Enter company email"
                />
              </div>

              <!-- Mobile Number -->
              <div class="col-6">
                <label for="mobileNumber" class="form-label">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  class="form-control mb-4"
                  v-model="userForm.mobile_number"
                  placeholder="Enter phone number"
                />
              </div>

              <!-- Designation -->
              <div class="col-6">
                <label for="designation" class="form-label">Designation</label>
                <input
                  type="text"
                  id="designation"
                  class="form-control mb-4"
                  v-model="userForm.designation"
                  placeholder="Enter job title"
                />
              </div>

              <!-- Role -->
              <div class="col-6">
                <label for="role" class="form-label">Role</label>
                <SelectSearchBox
                  v-model="userForm.role"
                  :options="roles"
                  placeholder="Choose Role"
                  :is-multi="false"
                  input-class="form-control form-select"
                  class-name="mb-3"
                />
              </div>

              <!-- Status -->
              <div class="col-6">
                <label for="status" class="form-label">Status</label>
                <SelectSearchBox
                  v-model="userForm.status"
                  :options="statuses"
                  placeholder="Choose Status"
                  :is-multi="false"
                  input-class="form-control form-select"
                  class-name="mb-3"
                />
              </div>

              <!-- HRMS ID -->
              <div class="col-6">
                <label for="hrmsId" class="form-label">HRMS ID</label>
                <input
                  type="text"
                  id="hrmsId"
                  class="form-control mb-4"
                  v-model="userForm.hrms_id"
                  placeholder="Enter HRMS ID"
                />
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="card-footer bg-white border-top d-flex justify-content-end px-5 pb-5 pt-0 text-center border-0">
            <div class="col-12">
              <div class="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary waves-effect btn-lg"
                  @click="cancelForm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-dark waves-effect btn-lg"
                  @click="saveUser"
                >
                  Save User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed,nextTick } from "vue";
import { useRouter } from "vue-router";
import LoaderVue from "@/layouts/Loader.vue";
import ImageUploader from "@/components/ImageUploader.vue";
import SelectSearchBox from "@/components/SelectSearchBox.vue";
import SingleToastVue from "@/components/SingleToast.vue";

// Dropdowns
const roles = [
  { label: "Admin", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Staff", value: "staff" },
];

const statuses = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

// Image Upload
import avatar from "@/assets/images/image-placeholder.jpg";

const previewUrl = ref(avatar);
const selectedRatio = ref(5/5);

function handleImageSelected(newImageUrl) {
  previewUrl.value = newImageUrl;
  userForm.value.profile_picture = newImageUrl;
}

// Toast
const showToast = ref(false);
const toastType = ref("");
const toastMessage = ref("");

const handleToast = ({ toastType: incomingType, toastMessage: incomingMessage }) => {
  toastType.value = incomingType;
  toastMessage.value = incomingMessage;
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 1000);
};

const hasLogoSelected = computed(() => previewUrl.value !== avatar);

// Router + Loading
const isLoading = ref(true);
const router = useRouter();

// Form
const userForm = ref({
  first_name: "",
  last_name: "",
  email: "",
  company_email: "",
  mobile_number: "",
  profile_picture: "",
  designation: "",
  role: "",
  status: "",
  hrms_id: "",
});

// Save Method
const saveUser = () => {
  if (!userForm.value.first_name || !userForm.value.last_name) {
    alert("Please fill in first and last name");
    return;
  }

  console.log("Saving user:", userForm.value);
  // TODO: Add API call here

  router.push("/users/list");
};

const cancelForm = () => {
  router.push("/users/list");
};


onMounted(() => {
  document.title = "Add User - CSPL CRM";
  setTimeout(() => (isLoading.value = false), 1000);
});
</script>
