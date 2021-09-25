import axios from 'axios';

const api = axios.create({
    baseURL: 'https://c67a-2804-7f4-3487-59c1-45a7-3db3-3f27-7464.ngrok.io/',
    headers: {
        Accept: 'application/json'
    }
});

export default api;