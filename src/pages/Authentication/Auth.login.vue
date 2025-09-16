<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xl-8 col-lg-7 col-md-6 d-sm-none d-none d-md-block">
          <div class="auth-full-bg pt-lg-5 p-4">
            <div class="w-100">
              <div class="bg-overlay"></div>
              <div class="d-flex h-100 flex-column">
                <div class="p-4 mt-auto">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <div class="text-center">
                        <h4 class="mb-3">
                          <i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i>
                          Connecting <span class="text-primary">you</span> to your <span class="text-primary">World.</span>
                        </h4>
                        <p class="font-size-16 mb-2">With PaySol you can:</p>

                        <div dir="ltr">
                          <div class="owl-carousel owl-theme auth-review-carousel" id="auth-review-carousel">
                            <div class="item">
                              <div class="py-1">
                                <p class="font-18px mb-2 text-primary">Track Your Sales</p>
                                <h1 class="mdi mdi-cash-refund text-primary font-50px"></h1>
                              </div>
                            </div>

                            <div class="item">
                              <div class="py-1">
                                <p class="font-18px mb-2 text-primary">Have An Overview Of Staff Performance</p>
                                <h1 class="mdi mdi-account-cash-outline text-primary font-50px"></h1>
                              </div>
                            </div>

                            <div class="item">
                              <div class="py-1">
                                <p class="font-18px mb-2 text-primary">Get Daily Reports</p>
                                <h1 class="mdi mdi-chart-line text-primary font-50px"></h1>
                              </div>
                            </div>

                            <div class="item">
                              <div class="py-1">
                                <p class="font-18px mb-2 text-primary">All This At Your Comfort</p>
                                <h1 class="mdi mdi-sofa-outline text-primary font-50px"></h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-4 col-md-6 col-lg-5">
          <div class="auth-full-page-content p-md-5 p-5 bg-white">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <AuthHeader />

                <div class="my-auto">
                  <div>
                    <h5 class="text-primary d-none ">Welcome Back!</h5>
                    <h2 class="fs-20 fw-bolder mb-4">Login</h2>
                    <p class="fw-bold mb-1">Login to your Account</p>
                    <p class="text-muted fs-12 mb-2">
                     Thank you for get back Nelel web applications, let's access our the best recommendation for you.
                    </p>
                  </div>

                  <div class="mt-4">
                    <form @submit.prevent="handleLogin">
                      <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input 
                          type="text" 
                          class="form-control " 
                          id="username" 
                          v-model="username"
                          placeholder="Enter username"
                          required
                        >
                      </div>

                      <div class="mb-3">
                        <div class="float-end">
                          <router-link to="/auth-recoverpw" class="text-muted">
                            Forgot password?
                          </router-link>
                        </div>
                        <label for="password" class="form-label">Password</label>
                        <div class="input-group auth-pass-inputgroup">
                          <input 
                            :type="showPassword ? 'text' : 'password'" 
                            class="form-control" 
                            id="password"
                            v-model="password"
                            placeholder="Enter password" 
                            aria-label="Password" 
                            aria-describedby="password-addon"
                            required
                          >
                          <button 
                            class="btn btn-light" 
                            type="button" 
                            id="password-addon"
                            @click="togglePasswordVisibility"
                            :aria-label="showPassword ? 'Hide password' : 'Show password'"
                          >
                            <i :class="showPassword ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'"></i>
                          </button>
                        </div>
                      </div>

                      <div class="form-check">
                        <input 
                          class="form-check-input" 
                          type="checkbox" 
                          id="remember-check"
                          v-model="rememberMe"
                        >
                        <label class="form-check-label" for="remember-check">
                          Remember me
                        </label>
                      </div>

                      <div class="mt-3 d-grid">
                        <button 
                          class="btn btn-primary waves-effect waves-light" 
                          type="submit"
                          :disabled="loading"
                        >
                          {{ loading ? 'Logging in...' : 'Log In' }}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <AuthFooter />

                
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AuthFooter from './Auth.Footer.vue'
import AuthHeader from './Auth.Header.vue'

const router = useRouter()

// Reactive data
const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const loading = ref(false)

// Computed property for current year
const currentYear = computed(() => new Date().getFullYear())

// Methods
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('Please fill in all fields')
    return
  }

  loading.value = true
  
  try {
    // Add your login logic here
    // Example: await authStore.login(username.value, password.value, rememberMe.value)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to dashboard or home page
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed. Please check your credentials.')
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
</style>