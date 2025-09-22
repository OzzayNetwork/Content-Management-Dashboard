// src/api/users.js
import apiClient from "./index";

export default {
  // Register a new user
  register(userData) {
    return apiClient.post(
      "/index.php?entity=auth&action=register",
      userData
    );
  },

  // Fetch all users (if supported by API)
  getAll() {
    return apiClient.get("/index.php?entity=auth&action=list");
  },

  // Get single user by ID (if supported)
  getById(id) {
    return apiClient.get(`/index.php?entity=auth&action=get&id=${id}`);
  },

  // Update user (if supported)
  update(id, userData) {
    return apiClient.post(
      "/index.php?entity=auth&action=update",
      { id, ...userData }
    );
  },

  // Delete user (if supported)
  delete(id) {
    return apiClient.post(
      "/index.php?entity=auth&action=delete",
      { id }
    );
  }
};
