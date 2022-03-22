import axios from 'axios';
import config from './axios.config';
import {setInterceptors} from './axios.interceptors.config';
const axiosInstance = axios.create(config); // json 格式的封裝

setInterceptors(axiosInstance);

export default axiosInstance;
