import axiosInstance from './index'; // 載入 json 格式的配置請求
import axiosForm from './form.index'; // 載入 formdata 格式的配置請求

// 請求接口封裝
export const S_login = (params) => axiosInstance.post('/Login',params);
export const S_uploadProfile = (params) => axiosForm.post('/UploadProfile',params); // 註冊會員 圖片上傳
export const S_signup = (params) => axiosInstance.post('/SignUp',params);

export const S_getUserInfo = (params) => axiosInstance.get('/GetUserInfo',params); // 取得會員資料
export const S_editUserInfo = (params) => axiosInstance.put('/EditUserInfo',params); // 編輯會員資料
export const S_editProfilePic = (params) => axiosForm.post('/EditProfilePic',params); // 編輯會員資料 圖片上傳
export const S_getAddProject = (params) => axiosInstance.get('/GetAddProject',params);
