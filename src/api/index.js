import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rcmsuat.craftsilicon.com/api1/website/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JjbXN1YXQuY3JhZnRzaWxpY29uLmNvbS9hcGkxL3dlYnNpdGUvYXBpIiwiYXVkIjoiaHR0cHM6Ly9yY21zdWF0LmNyYWZ0c2lsaWNvbi5jb20vYXBpMS93ZWJzaXRlL2FwaSIsImlhdCI6MTc1ODAxOTU4NSwibmJmIjoxNzU4MDE5NTg1LCJleHAiOjE3NTgxMDU5ODUsImRhdGEiOnsidXNlcl9pZCI6MSwibmFtZSI6IkFkbWluIFVzZXIiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIn19.OjNDz09ARyR0tHWtePrMOUupP6t3iVPDfqqT0JydCG4"
  }
});

export default apiClient;
