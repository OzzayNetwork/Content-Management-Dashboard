import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rcmsuat.craftsilicon.com/api1/website/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Function to set token dynamically
export function setAuthToken(token) {
  apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default apiClient;
