<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18">All Partners</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="javascript: void(0);">Partners</a></li>
              <li class="breadcrumb-item active">All Partners</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="row align-items-center">
              <div class="col">
                <h4 class="card-title">Partner List</h4>
              </div>
              <div class="col-auto">
                <router-link to="/partners/add" class="btn btn-primary">
                  <i class="mdi mdi-plus me-1"></i> Add Partner
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body">
            <!-- Partner list content will go here -->
            <div class="table-responsive">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Partner Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(partner, index) in partners" :key="partner.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ partner.name }}</td>
                    <td>{{ partner.type }}</td>
                    <td>
                      <span class="badge bg-success">{{ partner.status }}</span>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary me-1">
                        <i class="mdi mdi-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-danger">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerList',
  data() {
    return {
      partners: [
        {
          id: 1,
          name: 'ABC Corporation',
          type: 'Strategic Partner',
          status: 'Active'
        },
        {
          id: 2,
          name: 'XYZ Solutions',
          type: 'Technology Partner',
          status: 'Active'
        }
        // Add more sample data as needed
      ]
    }
  },
  mounted() {
    // Load partners data when component mounts
    this.loadPartners()
  },
  methods: {
    loadPartners() {
      // Add your API call logic here
      console.log('Loading partners...')
    },
    editPartner(partnerId) {
      // Navigate to edit partner page
      this.$router.push(`/partners/edit/${partnerId}`)
    },
    deletePartner(partnerId) {
      // Add delete confirmation and API call
      if (confirm('Are you sure you want to delete this partner?')) {
        console.log('Deleting partner:', partnerId)
      }
    }
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
.card-title {
  margin-bottom: 0;
}
</style>