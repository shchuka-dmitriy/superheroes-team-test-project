import axios from 'axios';
import CONSTANTS from '../constants';

const http = axios.create({
    baseURL: CONSTANTS.BASE_URL
});

http.interceptors.request.use(
    config => {
        return Promise.resolve(config);
    });

http.interceptors.response.use(
    response => Promise.resolve(response),
    error => {
        return Promise.reject(error);
    });

export default http;