<template>
    <div class="mt-4 mt-md-5 text-center">
        <p class="mb-0">
        © {{ currentYear }} CS Payments 
        <strong>Customer Relationship Management Dashboard</strong>
        </p>
    </div>
</template>

<script >

export default {
  name: "notFound",
  meta: { title: 'Login  |  CSPL Customer Relationship Management Dashboard' },
  
  // Option 1: Using mounted lifecycle hook
  mounted() {
    document.title = 'Login  |  CSPL Customer Relationship Management Dashboard';
  },
  
  // Option 2: Using beforeRouteEnter (if using Vue Router)
  beforeRouteEnter(to, from, next) {
    document.title = 'Login  |  CSPL Customer Relationship Management Dashboard';
    next();
  },
  
  // Option 3: Using created lifecycle hook
  created() {
    document.title = 'Login  |  CSPL Customer Relationship Management Dashboard';
  }
};

</script>

<style lang="scss" scoped>

</style>