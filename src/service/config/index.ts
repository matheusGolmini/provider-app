import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-reparo-rapido.herokuapp.com/',
    headers: {
        Accept: 'application/json'
    }
});

export default api;