<template>
  <div>
    <!-- 🔘 Trigger Button -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="csvUploadModal"
      tabindex="-1"
      aria-labelledby="csvUploadModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content p-0">
          <div class="modal-header justify-content-between flex-wrap gap-2">
            <div>
              <h5 class="modal-title mb-0" id="csvUploadModalLabel">
                Field Mapping for Uploaded Contacts
              </h5>
              <p class="text-muted mb-0">
                From: <span class="text-info">{{ fileName }}</span>
              </p>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>

          <div class="modal-body">
            <!-- ⚠️ Warning Alert: No phone or email selected -->
            <div
              v-if="!selectedPhoneField && !selectedEmailField && !isLoading && (parsedContacts.length > 0 || hasErrors)"
              class="alert alert-warning alert-dismissible fade show d-flex align-items-start gap-2 p-3 border-warning"
              role="alert"
            >
              <i class="bx bx-error-circle fs-4 text-warning"></i>
              <div>
                <strong>Heads up!</strong>
                Neither <strong>Phone Number</strong> nor
                <strong>Email Address</strong> columns were detected.
                <br />
                Please select at least one in the field mapping section below to
                enable sending messages.
              </div>
              <button
                type="button"
                class="btn-close position-absolute end-0 top-0 m-3"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>

            <!-- ✅ Success/Error Alert -->
            <div
              v-if="!isLoading && (parsedContacts.length > 0 || hasErrors) && !alertDismissed"
              :key="alertKey"
              class="alert alert-dismissible fade show d-flex flex-column gap-2 p-3 border-success"
              :class="hasErrors ? 'alert-danger' : 'alert-success'"
              role="alert"
            >
              <div class="d-flex align-items-center">
                <i
                  :class="
                    hasErrors
                      ? 'bx bx-error me-2 fs-3 text-danger'
                      : 'bx bx-check-double me-2 fs-3 text-success'
                  "
                ></i>
                <div>
                  <strong v-if="!hasErrors">Success!</strong>
                  <strong v-else>Error!</strong>
                  <span v-if="!hasErrors">
                    {{ parsedContacts.length }} row(s) were successfully
                    uploaded.
                  </span>
                  <span v-else>
                    There was an issue parsing the uploaded file. Please review
                    the errors below.
                  </span>
                </div>
              </div>

              <div v-if="!hasErrors" class="ms-4">
                <ul class="mb-0">
                  <li v-if="selectedPhoneField">
                    📞 Phone number column identified as:
                    <strong>{{ selectedPhoneField }}</strong>
                  </li>
                  <li v-if="selectedEmailField">
                    📧 Email address column identified as:
                    <strong>{{ selectedEmailField }}</strong>
                  </li>
                  <li v-if="selectedNameField">
                    👤 Name column identified as:
                    <strong>{{ selectedNameField }}</strong>
                  </li>
                  <li>
                    ✅ Please confirm or change the selections in the field
                    mapping section below.
                  </li>
                </ul>
              </div>

              <div v-if="hasErrors" class="ms-4 text-danger small">
                <ul class="mb-0">
                  <li v-for="(err, index) in parseErrors" :key="'err-' + index">
                    {{ err }}
                  </li>
                </ul>
              </div>

              <button
                type="button"
                class="btn-close position-absolute end-0 top-0 m-3"
                @click="dismissAlert"
                aria-label="Close"
              ></button>
            </div>

            <!-- ✅ Enhanced Success Alert -->
            <div
              v-if="!isLoading && (parsedContacts.length > 0 || hasErrors) && !alertDismissed"
              :key="alertKey"
              class="alert alert-dismissible fade show d-flex flex-column gap-2 p-3 border-success"
              :class="hasErrors ? 'alert-danger' : 'alert-success'"
              role="alert"
            >
              <div class="d-flex">
                <div class="d-flex gap-2 align-items-center mb-3"> 
                  <div>
                    <img src="../assets/images/icons/sheet-2.png" class="img" style="height: 90px;" alt="">
                  </div>
                  <div>
                    <p class="fw-semibold text-black fs-6 mb-0">{{ fileName }} ({{ hasErrors ? 'Upload Failed' : 'Uploaded Successfully' }})</p>
                    <p class="mb-0">
                      {{ formatFileSize(props.file?.size) }} <strong class="fs-5">•</strong> 
                      {{ parsedContacts.length }} Entries
                      <span v-if="getPhoneCount() > 0">
                        <strong>•</strong> {{ getPhoneCount() }} Phone Numbers From <strong>{{ selectedPhoneField }}</strong> Column
                      </span>
                      <span v-if="getEmailCount() > 0">
                        <strong>•</strong> {{ getEmailCount() }} Email Addresses From <strong>{{ selectedEmailField }}</strong> Column
                      </span>
                    </p>
                    <label
                      :for="fileInputId"
                      type="button"
                      class="btn btn-info waves-effect btn-label waves-light m-0 btn-sm mt-1"
                      fdprocessedid="uhbw7c"
                    >
                      <i class="bx bx-file label-icon"></i> Change Contacts Source
                    </label>
                  </div>
                </div>
              </div>

              <div v-if="!hasErrors" class="d-flex gap-3 flex-wrap">
                <span v-if="selectedPhoneField" class="badge badge-soft-info fs-6 p-2 px-3 text-success-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-phone-check fs-4"></i> Phone No. Field Identified As <strong>{{ selectedPhoneField }}</strong>
                </span>
                <span v-if="selectedNameField" class="badge badge-soft-info fs-6 p-2 px-3 text-success-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-account-check fs-4"></i> Name Field Identified As <strong>{{ selectedNameField }}</strong>
                </span>
                <span v-if="selectedEmailField" class="badge badge-soft-info fs-6 p-2 px-3 text-success-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-email-check fs-4"></i> Email Field Identified As <strong>{{ selectedEmailField }}</strong>
                </span>
                <span v-if="!selectedEmailField" class="badge badge-soft-danger fs-6 p-2 px-3 text-danger-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-email-remove fs-4"></i> System Could Not Automatically Identify Email Column
                </span>
                <span v-if="!selectedPhoneField" class="badge badge-soft-danger fs-6 p-2 px-3 text-danger-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-phone-remove fs-4"></i> System Could Not Automatically Identify Phone Column
                </span>
              </div>

              <div v-if="hasErrors" class="d-flex gap-3 flex-wrap">
                <span class="badge badge-soft-danger fs-6 p-2 px-3 text-danger-emphasis d-flex align-items-center gap-2">
                  <i class="mdi mdi-alert-circle fs-4"></i> File Processing Failed
                </span>
                <div class="ms-4 text-danger small">
                  <ul class="mb-0">
                    <li v-for="(err, index) in parseErrors" :key="'err-' + index">
                      {{ err }}
                    </li>
                  </ul>
                </div>
              </div>

              <p v-if="!hasErrors" class="mt-3 mb-0 d-flex gap-2 align-items-center">
                <i class="bx bx-info-circle fs-4 text-info"></i> 
                Please confirm or change the selections in the field mapping section below.
              </p>

              <button
                type="button"
                class="btn-close position-absolute end-0 top-0 m-3"
                @click="dismissAlert"
                aria-label="Close"
              ></button>
            </div>

            <!-- 🧭 Field Mapping -->
            <div v-if="parsedContacts.length > 0 && !isLoading" class="w-100 bg-light bg-warning-soft p-3 mt-3 bordered border-2 border-danger">
              <h5 class="my-3 mt-0">Map Your Fields</h5>
              <div class="row gy-3">
                <div class="col-sm-12 col-md-4">
                  <label class="form-label align-items-center d-flex">
                    <i class="bx bx-phone text-primary me-1 fs-4"></i>
                    <span>
                      Select Column for <strong>Phone Number</strong>
                      <span class="text-danger">*</span>
                    </span>
                  </label>
                  <select class="form-select" v-model="selectedPhoneField">
                    <option value="" inactive>-- Choose Column --</option>
                    <option
                      v-for="(header, index) in tableHeaders"
                      :key="'phone-' + index"
                      :value="header"
                    >
                      {{ header }}
                    </option>
                  </select>
                </div>

                <div class="col-sm-12 col-md-4">
                  <label class="form-label align-items-center d-flex">
                    <i class="bx bx-envelope text-primary me-1 fs-4"></i>
                    <span>
                      Select Column for <strong>Email Address</strong>
                      <span class="text-danger">*</span>
                    </span>
                  </label>
                  <select class="form-select" v-model="selectedEmailField">
                    <option value="">-- Choose Column --</option>
                    <option
                      v-for="(header, index) in tableHeaders"
                      :key="'email-' + index"
                      :value="header"
                    >
                      {{ header }}
                    </option>
                  </select>
                </div>

                <div class="col-sm-12 col-md-4">
                  <label class="form-label align-items-center d-flex">
                    <i class="bx bx-user text-muted me-1 fs-4"></i>
                    <span>
                      Select Column for <strong>Recipient Name</strong>
                      <small class="text-muted">(optional)</small>
                    </span>
                  </label>
                  <select class="form-select" v-model="selectedNameField">
                    <option value="">-- Choose Column --</option>
                    <option
                      v-for="(header, index) in tableHeaders"
                      :key="'name-' + index"
                      :value="header"
                    >
                      {{ header }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 📊 Table Preview -->
            <div class="upload-contacts-table-cont mt-4">
              <DataTable
                v-if="parsedContacts.length > 0 && !isLoading"
                :key="tableKey"
                class="table align-middle table-striped text-nowrap table-hover customTableStyle table-s"
                :data="parsedContacts"
                :columns="dataTableColumns"
                :options="dataTableOptions"
              />
              
              <!-- Loading state -->
              <div v-else-if="isLoading" class="text-center py-5">
                <div class="d-flex flex-column align-items-center">
                  <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <h5 class="text-muted mb-2">Processing {{ fileType }} file...</h5>
                  <p class="text-muted mb-3">
                    <i class="bx bx-file-blank me-1"></i>
                    {{ fileName }}
                  </p>
                  
                  <!-- Progress Bar with Percentage -->
                  <div class="w-100 d-flex flex-column align-items-center">
                    <div class="progress mb-2" style="width: 400px; height: 8px;">
                      <div 
                        class="progress-bar bg-primary" 
                        role="progressbar" 
                        :style="{ width: uploadProgress + '%' }"
                        :aria-valuenow="uploadProgress"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                      </div>
                    </div>
                    
                    <!-- Progress Details -->
                    <div class="d-flex justify-content-between w-100" style="max-width: 400px;">
                      <small class="text-muted">{{ processingStage }}</small>
                      <small class="text-primary fw-bold">{{ uploadProgress }}%</small>
                    </div>
                    
                    <!-- Processing Steps Indicator -->
                    <div class="mt-3 d-flex justify-content-center gap-2">
                      <span class="badge" :class="uploadProgress >= 30 ? 'bg-success' : 'bg-light text-dark'">
                        <i class="bx bx-file-import me-1"></i>Read
                      </span>
                      <span class="badge" :class="uploadProgress >= 55 ? 'bg-success' : 'bg-light text-dark'">
                        <i class="bx bx-cog me-1"></i>Parse
                      </span>
                      <span class="badge" :class="uploadProgress >= 80 ? 'bg-success' : 'bg-light text-dark'">
                        <i class="bx bx-data me-1"></i>Clean
                      </span>
                      <span class="badge" :class="uploadProgress >= 95 ? 'bg-success' : 'bg-light text-dark'">
                        <i class="bx bx-check-circle me-1"></i>Map
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Empty state -->
              <div v-else-if="!isLoading && parsedContacts.length === 0 && !hasErrors" class="text-center py-4 text-muted">
                <i class="bx bx-file fs-1 mb-2"></i>
                <p>No data to display. Please upload a file.</p>
              </div>
            </div>
          </div>

          <!-- 🔘 Buttons -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              :class="isLoading ? 'btn-warning' : 'btn-secondary'"
              @click="isLoading ? cancelProcessing() : null"
              data-bs-dismiss="modal"
            >
              <i v-if="isLoading" class="bx bx-x me-1"></i>
              <i v-else class="bx bx-arrow-back me-1"></i>
              {{ isLoading ? 'Cancel Upload' : 'Cancel' }}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              :disabled="!selectedPhoneField && !selectedEmailField || isLoading"
              @click="submitMapping"
            >
              <i class="bx bx-check me-1"></i>
              Submit Mapping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import * as XLSX from "xlsx";
import { nextTick } from "vue";
import SelectSearchBox from "./SelectSearchBox.vue";
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

// Props
const props = defineProps({
  file: {
    type: Object,
    default: null,
    validator: (f) => f instanceof File || f === null,
  },
  fileInputId: {
    type: String,
    default: "uploadContactsInput",
  }
});

// Reactive variables
const normalizedHeaders = ref([]);
const parseErrors = ref([]);
const parsedContacts = ref([]);
const selectedPhoneField = ref("");
const selectedEmailField = ref("");
const selectedNameField = ref("");
const fileName = ref("");
const fileType = ref("");
const isLoading = ref(false);
const alertDismissed = ref(false);
const alertKey = ref(0);
const uploadProgress = ref(0);
const processingStage = ref("");
const isCancelled = ref(false);
const fileReader = ref(null);
const tableKey = ref(0);

// Helper functions
function formatFileSize(bytes) {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function getPhoneCount() {
  if (!selectedPhoneField.value || !parsedContacts.value.length) return 0;
  return parsedContacts.value.filter(contact => 
    contact[selectedPhoneField.value] && 
    contact[selectedPhoneField.value].toString().trim() !== ''
  ).length;
}

function getEmailCount() {
  if (!selectedEmailField.value || !parsedContacts.value.length) return 0;
  return parsedContacts.value.filter(contact => 
    contact[selectedEmailField.value] && 
    contact[selectedEmailField.value].toString().trim() !== ''
  ).length;
}

function normalizeHeaders(headers = []) {
  return headers.map((header) =>
    header
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s(.)/g, (_, group1) => group1.toUpperCase())
      .replace(/\s/g, "")
      .replace(/^[A-Z]/, (c) => c.toLowerCase())
  );
}

// Computed properties
const hasErrors = computed(() => parseErrors.value.length > 0);

const tableHeaders = computed(() => {
  return parsedContacts.value.length > 0 ? Object.keys(parsedContacts.value[0]) : [];
});

const dataTableColumns = computed(() =>
  tableHeaders.value.map((h) => ({
    title: h,
    data: h
  }))
);

const dataTableOptions = computed(() => ({
  scrollY: '300px',
  scrollX: false,
  paging: true,
  searching: true,
  responsive: false,
  destroy: true,
  pageLength: 10,
  lengthMenu: [10, 25, 50, 100],
  autoWidth: false,
  columnDefs: [
    {
      targets: '_all',
      className: 'text-center',
      width: 'auto'
    }
  ],
  language: {
    search: "Search contacts:",
    lengthMenu: "Show _MENU_ contacts per page",
    info: "Showing _START_ to _END_ of _TOTAL_ contacts",
    paginate: {
      first: "First",
      last: "Last",
      next: "Next",
      previous: "Previous"
    }
  },
  initComplete: function() {
    const api = this.api();
    
    const visibleThead = document.querySelector('#csvUploadModal .dataTables_scrollHead thead');
    const hiddenThead = document.querySelector('#csvUploadModal .dataTables_scrollBody thead');
    
    if (visibleThead) {
      visibleThead.classList.add('bg-primary', 'text-white');
    }
    if (hiddenThead) {
      hiddenThead.classList.add('bg-primary', 'text-white');
    }
    
    setTimeout(() => {
      api.columns.adjust().draw();
    }, 50);
  },
  drawCallback: function() {
    setTimeout(() => {
      this.api().columns.adjust();
    }, 10);
  }
}));

// Main functions
function dismissAlert() {
  alertDismissed.value = true;
}

function showAlert() {
  alertDismissed.value = false;
  alertKey.value++;
}

function cancelProcessing() {
  isCancelled.value = true;
  
  if (fileReader.value) {
    fileReader.value.abort();
  }
  
  isLoading.value = false;
  uploadProgress.value = 0;
  processingStage.value = "";
  parseErrors.value = [];
  parsedContacts.value = [];
  selectedPhoneField.value = "";
  selectedEmailField.value = "";
  selectedNameField.value = "";
  alertDismissed.value = true;
  
  console.log("📤 File processing cancelled by user");
}

function parseUploadedFile(file) {
  if (!file) return;
  
  isCancelled.value = false;
  isLoading.value = true;
  uploadProgress.value = 0;
  processingStage.value = "Reading file...";
  parseErrors.value = [];
  parsedContacts.value = [];
  selectedPhoneField.value = "";
  selectedEmailField.value = "";
  selectedNameField.value = "";
  alertDismissed.value = true;

  const reader = new FileReader();
  fileReader.value = reader;
  
  const isExcel = file.name.endsWith(".xlsx") || file.name.endsWith(".xls");
  const isCSV = file.name.endsWith(".csv");

  fileType.value = isExcel ? "Excel" : isCSV ? "CSV" : "Unknown";

  reader.onprogress = (e) => {
    if (isCancelled.value) return;
    
    if (e.lengthComputable) {
      const percentLoaded = Math.round((e.loaded / e.total) * 30);
      uploadProgress.value = percentLoaded;
      processingStage.value = `Reading ${fileType.value} file... ${percentLoaded}%`;
    }
  };

  reader.onload = (e) => {
    if (isCancelled.value) return;
    
    uploadProgress.value = 30;
    processingStage.value = "Processing file data...";
    
    setTimeout(() => {
      if (isCancelled.value) return;
      
      try {
        let workbook, sheet;

        uploadProgress.value = 40;
        processingStage.value = "Parsing spreadsheet...";

        if (isCancelled.value) return;

        if (isExcel) {
          const data = new Uint8Array(e.target.result);
          workbook = XLSX.read(data, { type: "array" });
        } else if (isCSV) {
          const text = e.target.result;
          workbook = XLSX.read(text, { type: "string" });
        } else {
          parseErrors.value.push("Unsupported file type. Only Excel or CSV is allowed.");
          isLoading.value = false;
          showAlert();
          return;
        }

        if (isCancelled.value) return;

        uploadProgress.value = 55;
        processingStage.value = "Extracting data...";

        sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        if (!rawData.length) {
          parseErrors.value.push("Uploaded file is empty or could not be parsed.");
          isLoading.value = false;
          showAlert();
          return;
        }

        if (isCancelled.value) return;

        uploadProgress.value = 70;
        processingStage.value = "Normalizing headers...";

        const originalHeaders = Object.keys(rawData[0]);
        const normalizedKeys = normalizeHeaders(originalHeaders);

        if (isCancelled.value) return;

        uploadProgress.value = 80;
        processingStage.value = "Cleaning data...";

        const cleanedData = rawData.map((row, index) => {
          if (isCancelled.value) return null;
          
          if (index % 1000 === 0) {
            const cleanProgress = Math.round((index / rawData.length) * 15);
            uploadProgress.value = 80 + cleanProgress;
            processingStage.value = `Cleaning data... ${Math.round((index / rawData.length) * 100)}%`;
          }
          
          const newRow = {};
          normalizedKeys.forEach((cleanKey, idx) => {
            const originalKey = originalHeaders[idx];
            newRow[cleanKey] = row[originalKey];
          });
          return newRow;
        }).filter(row => row !== null);

        if (isCancelled.value) return;

        parsedContacts.value = cleanedData;

        uploadProgress.value = 95;
        processingStage.value = "Auto-mapping fields...";

        const lowerHeaders = normalizedKeys.map((h) => h.toLowerCase());

        selectedPhoneField.value =
          normalizedKeys[
            lowerHeaders.findIndex((h) => /(phone|mobile|cell)/.test(h))
          ] || "";

        selectedEmailField.value =
          normalizedKeys[
            lowerHeaders.findIndex((h) => /(email|e[-_]?mail|mail)/.test(h))
          ] || "";

        selectedNameField.value =
          normalizedKeys[
            lowerHeaders.findIndex((h) => /(name|fullName|recipient)/.test(h))
          ] || "";

        if (isCancelled.value) return;

        uploadProgress.value = 100;
        processingStage.value = "Complete!";

        nextTick(() => {
          if (isCancelled.value) return;
          
          tableKey.value++;
          
          setTimeout(() => {
            if (isCancelled.value) return;
            
            isLoading.value = false;
            showAlert();
          }, 500);
        });

        console.log("✅ Normalized headers:", normalizedKeys);
        console.log("📦 Cleaned contacts:", cleanedData);
      } catch (err) {
        if (isCancelled.value) return;
        
        console.error("❌ Failed to parse file:", err);
        parseErrors.value.push(`Failed to parse file: ${err.message}`);
        isLoading.value = false;
        showAlert();
      }
    }, 100);
  };

  reader.onerror = () => {
    if (isCancelled.value) return;
    
    parseErrors.value.push("Failed to read the file.");
    isLoading.value = false;
    showAlert();
  };

  reader.onabort = () => {
    console.log("📤 File reading aborted");
  };

  if (isExcel) {
    reader.readAsArrayBuffer(file);
  } else if (isCSV) {
    reader.readAsText(file);
  } else {
    parseErrors.value.push("Invalid file format.");
    isLoading.value = false;
    showAlert();
  }
}

function openModal() {
  const modalEl = document.getElementById("csvUploadModal");
  if (!modalEl) return;

  const isAlreadyOpen = modalEl.classList.contains("show");

  if (!isAlreadyOpen) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function submitMapping() {
  if (!selectedPhoneField.value && !selectedEmailField.value) {
    alert("Please select at least one field (Phone Number or Email Address).");
    return;
  }
  
  const mappedData = {
    contacts: parsedContacts.value,
    phoneField: selectedPhoneField.value,
    emailField: selectedEmailField.value,
    nameField: selectedNameField.value
  };
  
  console.log("Submitting mapped data:", mappedData);
}

// Watchers
watch(
  () => props.file,
  (newVal) => {
    console.log("Child received new file:", newVal);
    if (newVal) {
      fileName.value = newVal.name;
      
      isLoading.value = true;
      alertDismissed.value = true;
      
      openModal();
      
      nextTick(() => {
        setTimeout(() => {
          parseUploadedFile(newVal);
        }, 100);
      });
    }
  }
);

watch(
  () => parsedContacts.value,
  () => {
    nextTick(() => {
      tableKey.value++;
    });
  },
  { deep: true }
);
</script>

<style lang="scss">
.upload-contacts-table-cont {
  border: 1px solid #9e9e9e61;
}

.upload-contacts-table-cont .table-striped > tbody > tr:nth-of-type(odd) > * {
  color: var(--bs-table-striped-color);
}

.upload-contacts-table-cont .table-bordered > :not(caption) > * > * {
  border: 1px solid #50a5f185;
}

.dt-scroll-body thead {
  visibility: collapse;
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
}

.dt-container > .dt-layout-row:first-of-type {
  padding: 1rem;
  border-bottom: 2px solid #2196f3;
  font-weight: bold;
  display: flex;
}

.dt-search label{
  display: none;
}

.customTableStyle thead{
  text-transform: capitalize;
  border-top: 1px solid grey;
}

.table.dataTable{
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.customTableStyle .table>:not(caption)>*>*{
  border-bottom: none;
}
</style>