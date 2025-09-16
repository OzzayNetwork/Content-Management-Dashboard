import apiClient from "./index";

export default {
  // Fetch all partners
  getAll() {
    return apiClient.get("/partners"); 
    // 👆 adjust endpoint according to your API docs
  },

  // Get single partner by ID
  getById(id) {
    return apiClient.get(`/partners/${id}`);
  },

  // Create new partner
  create(partner) {
    return apiClient.post("/partners", partner);
  },

  // Update partner
  update(id, partner) {
    return apiClient.put(`/partners/${id}`, partner);
  },

  // Delete partner
  delete(id) {
    return apiClient.delete(`/partners/${id}`);
  }
};
