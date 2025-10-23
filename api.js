import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parkingapidyego.azurewebsites.net', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
