import axios from 'axios'
import { apiurl } from './api.url'

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: apiurl.URL,
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

export default axiosInstance