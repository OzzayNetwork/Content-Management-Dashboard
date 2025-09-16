import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rcmsuat.craftsilicon.com/api1/website/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JjbXN1YXQuY3JhZnRzaWxpY29uLmNvbS9hcGkxL3dlYnNpdGUvYXBpIiwiYXVkIjoiaHR0cHM6Ly9yY21zdWF0LmNyYWZ0c2lsaWNvbi5jb20vYXBpMS93ZWJzaXRlL2FwaSIsImlhdCI6MTc1Nzk0NzM5NCwibmJmIjoxNzU3OTQ3Mzk0LCJleHAiOjE3NTgwMzM3OTQsImRhdGEiOnsidXNlcl9pZCI6MSwibmFtZSI6IkFkbWluIFVzZXIiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIn19.OCzGaoWdq11nPbl2Wydg_hdL1L4fBD4zuldf4-uIkDI`
  }
});

export default apiClient;
// Note: Replace the baseURL and Authorization token with environment variables for better security in production.