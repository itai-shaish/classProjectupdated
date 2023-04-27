import axios from 'axios';
import { BASE_API_URL } from '../config';

const axiosCustomInstance = axios.create({
    baseURL: BASE_API_URL
});



/**
 * Axios interceptors 
 * 1. request
 * 2. response
 */


// Intercept on response
axiosCustomInstance.interceptors.request.use(
    res => {
        //
        return res;
    },
    err => {
        // Error handling logic
        // ....................


        return Promise.reject(err);
    },
);



axiosCustomInstance.interceptors.response.use(
    res => {
        //
        return res;
    },
    err => {
        // Error handling logic
        // ....................
        if (err.response.status === 401) {
            console.log('you shell not pass')
        }

        console.log('this is an error', err)
        return Promise.reject(err);
    },
);



export default axiosCustomInstance;