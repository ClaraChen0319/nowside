import axiosInstance from './index'; // 載入 json 格式的配置請求
import axiosForm from './form.index'; // 載入 formdata 格式的配置請求

// 請求接口封裝
export const login = (params) => axiosInstance.post('/Login',params);
export const upload = (params) => axiosForm.post('/Upload',params); // 圖片上傳用
export const signup = (params) => axiosInstance.post('/SignUp',params); // 
