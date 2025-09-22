import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.0.102:8080', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// api.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem('@token'); 
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; 
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default api;
