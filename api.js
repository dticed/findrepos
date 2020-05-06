import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.github.com/", //tinha esquecido de usar o endereço completo
});

export default api;


