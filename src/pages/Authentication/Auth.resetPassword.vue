<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <!-- Left banner remains the same -->
        <div class="col-xl-8 col-lg-7 col-md-6 d-sm-none d-none d-md-block">
          <div class="auth-full-bg pt-lg-5 p-4">
            <div class="w-100">
              <div class="bg-overlay"></div>
              <div class="d-flex h-100 flex-column">
                <div class="p-4 mt-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Password reset form -->
        <div class="col-xl-4 col-md-6 col-lg-5">
          <div class="auth-full-page-content p-md-5 p-5 bg-white">
            <div class="w-100">
              <div class="d-flex flex-column h-100 p-3">
                <AuthHeader />

                <div class="my-auto">
                  <div>
                    <h5 class="text-uppercase fs-12">Customer Relationship Management Dashboard</h5>
                    <h3 class="fs-20 fw-bolder mb-4 mt-0 pt-0">Reset Your Password</h3>
                    <p class="fw-bold mb-1">Forgot your password?</p>
                    <p class="text-muted fs-12 mb-2">
                      Enter your registered email address below. We'll send you a one-time password (OTP) to verify your identity.
                    </p>
                  </div>

                  <div class="mt-4">
                    <form @submit.prevent="handlePasswordReset">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input 
                          type="email" 
                          class="form-control" 
                          id="email" 
                          v-model="email"
                          placeholder="Enter your email"
                          required
                        >
                      </div>

                      <div class="mt-3 d-grid">
                        <button 
                          class="btn btn-primary waves-effect waves-light d-flex align-items-center justify-content-center btn-lg text-uppercase" 
                          type="submit"
                          :disabled="loading"
                        >
                          <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {{ loading ? 'Sending OTP...' : 'Send OTP' }}
                        </button>
                      </div>
                    </form>

                    <div class="mt-5 text-muted">
                    <span> Remembered your password? </span>
                    <router-link to="/login" class="fw-bold">Back to Login</router-link>
                    </div>

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
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import NProgress from "nprogress";

import AuthFooter from "./Auth.Footer.vue";
import AuthHeader from "./Auth.Header.vue";
import ImageToast from "@/components/ImageToast.vue";

import authApi from "@/api/auth";   // Should expose password reset request endpoint

// Importing toast images
import successImage from "../../assets/images/icons/check.png";
import errorImage from "../../assets/images/icons/error.png";

const router = useRouter();

// Form state
const email = ref("");
const loading = ref(false);

// Toast state
const toastStatus = ref(null);
const toastTitle = ref("");
const toastMessage = ref("");
const toastImage = ref(null);

// Method: Request OTP for password reset
const handlePasswordReset = async () => {
  if (!email.value) {
    toastStatus.value = "error";
    toastTitle.value = "Missing Email";
    toastMessage.value = "Please enter your registered email address.";
    toastImage.value = errorImage;
    return;
  }

  NProgress.start();
  loading.value = true;
  toastStatus.value = "loading";
  toastTitle.value = "Processing...";
  toastMessage.value = "Requesting password reset OTP...";
  toastImage.value = null;

  try {
    const response = await authApi.requestPasswordReset({ email: email.value });

    // ✅ Assume backend responds with success
    toastStatus.value = "success";
    toastTitle.value = "OTP Sent";
    toastMessage.value = `An OTP has been sent to ${email.value}. Please check your inbox.`;
    toastImage.value = successImage;

    // Redirect to OTP verification page after a short delay
    setTimeout(() => {
      router.push({ path: "/verify-otp", query: { email: email.value } });
    }, 1500);

  } catch (error) {
    console.error("Password reset error:", error.response?.data || error.message);
    toastStatus.value = "error";
    toastTitle.value = "Request Failed";
    toastMessage.value = "We couldn't send the OTP. Please check your email and try again.";
    toastImage.value = errorImage;
  } finally {
    NProgress.done();
    loading.value = false;
  }
};
</script>
<style scoped>
  .auth-full-bg .bg-overlay{
background-color: #2164f3;
    background: url(../../assets/images/modern-bg/bg-email.png);
    /* background-repeat: no-repeat; */
    background-size: cover;
    /* background-size: contain; */
    background-position: center;
     opacity: .8;

  }
  .auth-full-bg{
    background-color: #2164f3;
  }
</style>
