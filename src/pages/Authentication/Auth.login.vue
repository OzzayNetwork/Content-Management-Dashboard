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
                  <div class="row justify-content-center d-none">
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
              <div class="d-flex flex-column h-100 p-3">
                <AuthHeader />

                <div class="my-auto">
                  <div>
                    <h5 class=" text-uppercase fs-12 ">Customer Relationship Management Dashboard</h5>
                    <h3 class="fs-20 fw-bolder mb-4 mt-0 pt-0">Dashboard Login</h3>
                    <p class="fw-bold mb-1">Login to your Account</p>
                    <p class="text-muted fs-12 mb-2">
                        Access your customer relationship tools securely. Enter your credentials to manage clients, track interactions, and monitor performance.
                    </p>
                  </div>

                  <div class="mt-4">
                    <form @submit.prevent="handleLogin">
                      <div class="mb-3">
                        <label for="username" class="form-label">Email</label>
                        <input 
                          type="email" 
                          class="form-control " 
                          id="username" 
                          v-model="username"
                          placeholder="Enter email"
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
                          class="btn btn-primary waves-effect waves-light d-flex align-items-center justify-content-center" 
                          type="submit"
                          :disabled="loading"
                        >   
                           <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {{ loading ? 'Logging in...' : 'Log In' }}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <AuthFooter />
                <ImageToast
                    :status="toastStatus"
                    :title="toastTitle"
                    :message="toastMessage"
                    :image="toastImage"
                    :imageHeight="70"
                    @hide="toastStatus = null"
                />


                
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
/**
 * ================================
 * IMPORTS
 * ================================
 */
import { ref, computed } from "vue"; // Vue reactivity + computed values
import { useRouter } from "vue-router"; // For navigation after login
import AuthFooter from "./Auth.Footer.vue"; // Login footer UI
import AuthHeader from "./Auth.Header.vue"; // Login header UI

import authApi from "@/api/auth";   // API module for authentication requests
import { setAuthToken } from "@/api/index"; // Helper to attach token to requests
import ImageToast from "@/components/ImageToast.vue"; // Toast component for feedback

//Importing the results images
import successImage from "../../assets/images/icons/check.png";
import errorImage from "../../assets/images/icons/error.png";

/**
 * ================================
 * REACTIVE STATE
 * ================================
 */
const router = useRouter(); // Vue Router instance for navigation

// User credentials + login form state
const username = ref("");      // Username input value (actually email)
const password = ref("");      // Password input value
const rememberMe = ref(false); // "Remember me" checkbox
const showPassword = ref(false); // Toggles password visibility
const loading = ref(false);    // Loading state during API call

// Toast state (drives ImageToast component)
const toastStatus = ref(null); // "loading" | "success" | "error"
const toastTitle = ref("");    // Toast heading text
const toastMessage = ref("");  // Toast body text
const toastImage = ref(null);  // Optional toast image (success/error icons)

// Dynamic current year (for footer or branding)
const currentYear = computed(() => new Date().getFullYear());

/**
 * ================================
 * METHODS
 * ================================
 */

// Toggle between password text/plain or hidden
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Handle login process
const handleLogin = async () => {
  // Validation: ensure both fields are filled
  if (!username.value || !password.value) {
    toastStatus.value = "error";
    toastTitle.value = "Missing Fields";
    toastMessage.value = "Please enter both username and password.";
    toastImage.value = errorImage;
    return;
  }

  // Begin loading state + show loading toast
  loading.value = true;
  toastStatus.value = "loading";
  toastTitle.value = "Logging In";
  toastMessage.value = "Please wait while we authenticate...";
  toastImage.value = null;

  try {
    // Call login API with entered credentials
    const response = await authApi.login({
      email: username.value,    // 👈 API expects "email"
      password: password.value
    });

    // Extract token (depends on API response structure)
    const token = response.data?.data?.token || response.data?.token;
    if (!token) throw new Error("No token received from API");

    console.log(response.data);

    // Save token for future authenticated requests
    setAuthToken(token);
    if (rememberMe.value) {
      localStorage.setItem("authToken", token); // Persist across sessions
    } else {
      sessionStorage.setItem("authToken", token); // Clear on browser close
    }

    // Success toast
    toastStatus.value = "success";
    toastTitle.value = "Login Successful 🎉";
    toastMessage.value = "Welcome back to the dashboard.";
    toastImage.value = successImage;

    // Redirect to dashboard after short delay
    setTimeout(() => {
      router.push("/");
    //    window.location.href = "/";
    }, 1500);

  } catch (error) {
    // Log exact backend error for debugging
    console.error("Login failed:", error.response?.data || error.message);

    setTimeout(() => {
      toastStatus.value = "error";
      toastTitle.value = "Login Failed";
      toastMessage.value = "The email address or password you entered is incorrect. Please check your credentials and try again.";
      toastImage.value = errorImage;
    }, 100);

  } finally {
    // Always stop loading spinner
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
</style>