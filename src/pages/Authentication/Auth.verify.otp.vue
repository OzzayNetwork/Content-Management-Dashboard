<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <!-- Left banner -->
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

        <!-- OTP verification form -->
        <div class="col-xl-4 col-md-6 col-lg-5">
          <div class="auth-full-page-content p-md-5 p-5 bg-white">
            <div class="w-100">
              <div class="d-flex flex-column h-100 p-3">
                <AuthHeader />

                <div class="my-auto">
                  <div>
                    <h5 class="text-uppercase fs-12">Customer Relationship Management Dashboard</h5>
                    <h3 class="fs-20 fw-bolder mb-4 mt-0 pt-0">Verify OTP</h3>
                    <p class="fw-bold mb-1">Enter the 6-digit OTP</p>
                    <p class="text-muted fs-12 mb-2">
                      We've sent a one-time password (OTP) to <strong>{{ email }}</strong>. Please enter it below to continue.
                    </p>
                  </div>

                  <div class="mt-4">
                    <form @submit.prevent="handleOtpSubmit" class="text-center">
                      <div class="d-flex justify-content-between gap-3 mb-3">
                        <input
                          v-for="(digit, index) in otpInputs"
                          :key="index"
                          ref="otpInput"
                          type="text"
                          maxlength="1"
                          class="form-control text-center fs-4"
                          
                          v-model="otp[index]"
                          @input="moveToNext(index, $event)"
                          @keydown.backspace="moveToPrev(index, $event)"
                          required
                        />
                      </div>

                      <div class="mt-3 d-grid">
                        <button
                          class="btn btn-primary waves-effect waves-light d-flex align-items-center justify-content-center btn-lg text-uppercase"
                          type="submit"
                          :disabled="loading"
                        >
                          <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {{ loading ? 'Verifying...' : 'Verify OTP' }}
                        </button>
                      </div>
                    </form>

                    <div class="mt-4 text-muted text-center">
                      <span> Didn’t receive the OTP? </span>
                      <a href="javascript:void(0)" class="fw-bold" @click="resendOtp">Resend</a>
                    </div>

                    <div class="mt-4 text-muted text-center">
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
import { ref, nextTick, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import NProgress from "nprogress";

import AuthFooter from "./Auth.Footer.vue";
import AuthHeader from "./Auth.Header.vue";
import ImageToast from "@/components/ImageToast.vue";

import authApi from "@/api/auth";

import successImage from "../../assets/images/icons/check.png";
import errorImage from "../../assets/images/icons/error.png";

const router = useRouter();
const route = useRoute();

// Email comes from reset flow (query param)
const email = route.query.email || "your email";

// OTP input handling
const otp = ref(["", "", "", "", "", ""]);
const otpInputs = Array(6).fill(null);
const otpInput = ref([]);

const loading = ref(false);

// Toast state
const toastStatus = ref(null);
const toastTitle = ref("");
const toastMessage = ref("");
const toastImage = ref(null);

// Move to next input automatically
const moveToNext = (index, event) => {
  if (event.inputType === "insertText" && otp.value[index] && index < 5) {
    nextTick(() => otpInput.value[index + 1].focus());
  }
};

// Move back on backspace
const moveToPrev = (index, event) => {
  if (event.key === "Backspace" && !otp.value[index] && index > 0) {
    nextTick(() => otpInput.value[index - 1].focus());
  }
};

// ✅ Auto-focus first box on mount
onMounted(() => {
  nextTick(() => {
    if (otpInput.value[0]) {
      otpInput.value[0].focus();
    }
  });
});

// Submit OTP
const handleOtpSubmit = async () => {
  const code = otp.value.join("");

  if (code.length !== 6) {
    toastStatus.value = "error";
    toastTitle.value = "Invalid OTP";
    toastMessage.value = "Please enter the full 6-digit code.";
    toastImage.value = errorImage;
    return;
  }

  NProgress.start();
  loading.value = true;
  toastStatus.value = "loading";
  toastTitle.value = "Verifying...";
  toastMessage.value = "Checking the OTP you entered.";
  toastImage.value = null;

  try {
    const response = await authApi.verifyOtp({ email, otp: code });

    toastStatus.value = "success";
    toastTitle.value = "OTP Verified";
    toastMessage.value = "Your OTP is valid. Redirecting...";
    toastImage.value = successImage;

    setTimeout(() => {
      router.push("/reset-password-confirm"); // proceed to set new password
    }, 1500);
  } catch (error) {
    console.error("OTP verification failed:", error.response?.data || error.message);
    toastStatus.value = "error";
    toastTitle.value = "Invalid OTP";
    toastMessage.value = "The OTP entered is incorrect or expired.";
    toastImage.value = errorImage;
  } finally {
    NProgress.done();
    loading.value = false;
  }
};

// Resend OTP
const resendOtp = async () => {
  try {
    await authApi.requestPasswordReset({ email });
    toastStatus.value = "success";
    toastTitle.value = "OTP Resent";
    toastMessage.value = `A new OTP has been sent to ${email}.`;
    toastImage.value = successImage;
  } catch (error) {
    toastStatus.value = "error";
    toastTitle.value = "Failed to Resend";
    toastMessage.value = "Could not resend OTP. Try again.";
    toastImage.value = errorImage;
  }
};
</script>
