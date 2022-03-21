import axiosInstance from './index';

// 請求接口封裝
export const login = (params) => axiosInstance.post('/Login',params);
export const signup = (params) => axiosInstance.post('/SignUp',params);
