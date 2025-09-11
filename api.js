import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cria uma instância do Axios
const api = axios.create({
  baseURL: 'http://192.168.0.102:8080', // sua URL base
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token'); // pega o token do AsyncStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // adiciona no header
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
