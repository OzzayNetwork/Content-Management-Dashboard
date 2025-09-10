<template>
    <div class="container-fluid">
        <!-- Page Title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Add Partner</h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item">
                                <router-link to="/">Dashboard</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link to="/partners/list">Partners</router-link>
                            </li>
                            <li class="breadcrumb-item active">Add Partner</li>
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
            <div class="col-sm-12 col-lg-8 offset-lg-2">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Partner Onboarding</h4>
                        <p class="card-title-desc text-muted mb-0">
                            Register business partners to be displayed on the website's partnership page and strengthen your market presence.                        </p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="../../assets/images/image-placeholder.jpg" alt="" class="avatar-xl rounded-circle img-thumbnail">
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                        <div class="text-muted">
                                            <h5 class="mb-1 text-black">Client's Logo</h5>
                                            <p class="">Accepted file format type is PNG or SVG. Less than 2 MB</p>
                                            <button type="button" class="btn btn-primary waves-effect waves-light">
                                                <i class="bx bx-image-add font-size-16 align-middle me-2"></i> Select Logo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <hr class="opacity-25 mb-4 bg-grey">
                            </div>
                            <div class="col-6">
                                <div>
                                    <label for="partnerName" class="form-label">Partner Name</label>
                                    <input type="text" class="form-control mb-4" id="partnerName" v-model="partnerForm.name" placeholder="Name of Organization" />
                                </div>
                            </div>

                            <div class="col-6">
                                <div>
                                    <label for="partnerAbbreviation" class="form-label">Abbreviation</label>
                                    <input type="text" class="form-control mb-4" id="partnerAbbreviation" v-model="partnerForm.abbreviation" placeholder="Enter abbreviation" />
                                </div>
                            </div>

                            <div class="col-6">
                                <div>
                                    <label for="organizationType" class="form-label">Organization Type</label>
                                    <input type="text" class="form-control mb-4" id="organizationType" v-model="partnerForm.organizationType" placeholder="Enter organization type" />
                                </div>
                            </div>

                            <div class="col-6">
                                <div>
                                    <label for="partnershipType" class="form-label">Partnership Type</label>
                                    <select class="form-select mb-4" id="partnershipType" v-model="partnerForm.partnershipType">
                                        <option value="">Select partnership type</option>
                                        <option value="strategic">Strategic Partner</option>
                                        <option value="technology">Technology Partner</option>
                                        <option value="service">Service Partner</option>
                                        <option value="channel">Channel Partner</option>
                                        <option value="integration">Integration Partner</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12">
                                <div>
                                    <label for="partnerDescription" class="form-label">Partnership Description</label>
                                    <textarea class="form-control mb-4" id="partnerDescription" rows="3" v-model="partnerForm.description" placeholder="Enter partner description"></textarea>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <label>Partner Links & Website</label>
                                    <button type="button" class="btn btn-sm btn-outline-primary d-none" @click="addLink">
                                        <i class="mdi mdi-plus"></i> Add Link
                                    </button>
                                </div>
                                
                                <div v-for="(link, index) in partnerForm.links" :key="index" class="row mb-3">
                                    <div class="col-6">
                                        <input 
                                            type="url" 
                                            class="form-control" 
                                            v-model="link.url" 
                                            placeholder="https://example.com" 
                                        />
                                    </div>
                                    <div class="col-6 d-flex gap-3">
                                        <input 
                                            type="text" 
                                            class="form-control flex-grow-2 flex-grow-1 w-100" 
                                            v-model="link.title" 
                                            placeholder="Link Title eg Website" 
                                        />

                                        <div class="d-flex align-items-center">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger  w-auto" 
                                            @click="removeLink(index)"
                                            :disabled="partnerForm.links.length === 1"
                                        >
                                            <i class="bx bx-x font-size-16 align-middle "></i>
                                        </button>
                                    </div>
                                    </div>

                                   
                                    
                                </div>

                                 <div class="col">
                                    <button type="button" class="btn btn-link waves-effect" @click="addLink">  <i class="bx bx-plus font-size-16 align-middle "></i> Add Another Link</button>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                    <div class="card-footer bg-white border-top d-flex justify-content-end pb-3">
                        <div class="col-12">
                                <div class="d-flex justify-content-end gap-2">
                                    <button type="button" class="btn btn-outline-secondary waves-effect"  @click="cancelForm">Cancel</button>
                                    <button type="button" class="btn btn-dark waves-effect" @click="savePartner">Save Partner</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LoaderVue from "@/layouts/Loader.vue";
import ImageUploader from '@/components/ImageUploader.vue';
import SelectSearchBox from '@/components/SelectSearchBox.vue';
import SingleToastVue from '@/components/SingleToast.vue';

// Define component name and meta (this syntax is for Vue 3.3+)
defineOptions({
  name: "AddPartner",
  meta: { title: 'Add Partner' }
});

const isLoading = ref(true);
const router = useRouter();

// Form data
const partnerForm = ref({
  name: '',
  abbreviation: '',
  organizationType: '',
  partnershipType: '',
  description: '',
  links: [
    { url: '', title: '' }
  ]
});

// Methods
const addLink = () => {
  partnerForm.value.links.push({ url: '', title: '' });
};

const removeLink = (index) => {
  if (partnerForm.value.links.length > 1) {
    partnerForm.value.links.splice(index, 1);
  }
};

const savePartner = () => {
  // Validate form
  if (!partnerForm.value.name) {
    alert('Please enter partner name');
    return;
  }
  
  // Filter out empty links
  const validLinks = partnerForm.value.links.filter(link => link.url && link.title);
  
  const partnerData = {
    ...partnerForm.value,
    links: validLinks
  };
  
  console.log('Saving partner:', partnerData);
  // Add your API call here
  
  // Redirect to partners list after saving
  router.push('/partners/list');
};

const cancelForm = () => {
  router.push('/partners/list');
};

onMounted(() => {
  // Set page title
  document.title = 'Add Partner - CSPL CRM';
  
  // Simulate loading time or wait for data to load
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Adjust timing as needed
});
</script>

<style>
/* Add your styles here */
</style>