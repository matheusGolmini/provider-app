import axios from 'axios';

const api = axios.create({
    baseURL: 'https://95c6-2804-7f4-3487-59c1-becd-67f0-8139-1a72.ngrok.io/',
    headers: {
        Accept: 'application/json'
    }
});

export default api;