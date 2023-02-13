import axios from 'axios'

// Axios entende que Backend e Frontend estão no mesmo host
export const api = axios.create({
  baseURL: '/api',
})
