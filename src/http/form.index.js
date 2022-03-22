import axios from 'axios';
import config from './form.config';
import {setInterceptors} from './axios.interceptors.config';
const axiosForm = axios.create(config); // formdata 格式的封裝

setInterceptors(axiosForm);

export default axiosForm;
