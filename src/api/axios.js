import axios from "axios";

const instance = axios.create({
  baseURL: "https://mold-components.onrender.com",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
})

export { instance };