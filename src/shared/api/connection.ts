import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
// const API_HOST = process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST;

export const API_URL = 'https://coinranking1.p.rapidapi.com';
const API_HOST = 'coinranking1.p.rapidapi.com';
// const API_KEY = 'xxxxxxxxxxxxxx-xxxxxxxxxxx-xxxxxxxxxxxxxx';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});
