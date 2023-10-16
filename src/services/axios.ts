import axios from "axios";

export const docmentorAPI = axios.create( {
    baseURL: import.meta.env.VITE_BASE_URL_DEV,
    // timeout: 3000,
} );
