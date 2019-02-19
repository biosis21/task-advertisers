import axios from 'axios';

const API_VERSION = 'v1';

export default axios.create({
    baseURL: `https://5b87a97d35589600143c1424.mockapi.io/api/${API_VERSION}`
});