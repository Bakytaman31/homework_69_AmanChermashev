import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'https://products-and-orders.firebaseio.com/'
});

export default axiosApp;