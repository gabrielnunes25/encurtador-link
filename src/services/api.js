import axios from 'axios';

const key = 'afb7501142bc455a44b47d73a4eef92551c8791e';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
