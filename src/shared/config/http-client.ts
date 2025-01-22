import axios from "axios";

const DEV_URL = ''

const httpClient = axios.create({
  headers: { 'Content-Type': 'multipart/form-data' },
  baseURL: DEV_URL,
})

export { httpClient }