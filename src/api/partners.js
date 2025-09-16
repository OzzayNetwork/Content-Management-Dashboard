import apiClient from "./index";

export default {
  getAll() {
    return apiClient.get("/index.php?entity=partners");
  },
};
