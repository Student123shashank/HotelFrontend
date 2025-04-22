import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hotelbackend-8yo0.onrender.com/api/v1', 
});

export default api;
