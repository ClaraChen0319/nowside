import axiosInstance from './index'; // 載入 json 格式的配置請求
import axiosForm from './form.index'; // 載入 formdata 格式的配置請求

// Common
export const S_login = (params) => axiosInstance.post('/Login',params); // 登入會員
export const S_signup = (params) => axiosInstance.post('/SignUp',params); // 註冊會員
export const S_uploadProfile = (params) => axiosForm.post('/UploadProfile',params); // 註冊會員 圖片上傳
export const S_getSkills = (params) => axiosForm.get('/GetSkills',params); // 取得技能列表
export const S_getProjectClass = (params) => axiosForm.get('/GetProjectClass',params); // 取得專案類別列表
// export const S_checkUser = (params) => axiosInstance.post('/CheckUser',params); // 登入驗證

// User
export const S_getUserInfo = (params) => axiosInstance.get('/GetUserInfo',params); // 取得會員資料
export const S_editUserInfo = (params) => axiosInstance.put('/EditUserInfo',params); // 編輯會員資料
export const S_editProfilePic = (params) => axiosForm.post('/EditProfilePic',params); // 編輯會員資料 圖片上傳
export const S_getAddProject = (params) => axiosInstance.get('/GetAddProject',params); // 取得發起的專案資料
export const S_getAddProjectNoPage = (params) => axiosInstance.get('/GetAddProjectNoPage',params); // 取得發起的專案資料（無分頁）
export const S_getApplyProject = (params) => axiosInstance.get('/GetApplyProject',params); // 取得申請的專案資料
export const S_getApplyProjectNoPage = (params) => axiosInstance.get('/GetApplyProjectNoPage',params); // 取得申請的專案資料（無分頁）
export const S_getAttendProject = (params) => axiosInstance.get('/GetAttendProject',params); // 取得參與的專案資料
export const S_getAttendProjectNoPage = (params) => axiosInstance.get('/GetAttendProjectNoPage',params); // 取得參與的專案資料（無分頁）
// export const S_getSaveProject = (params) => axiosInstance.get('/GetSaveProject',params); // 取得收藏的專案資料

// ViewProject
export const S_getAllProject = (params) => axiosInstance.get('/GetAllProject',params); // 取得所有專案列表
export const S_getAllProjectNoPage = (params) => axiosInstance.get('/GetAllProjectNoPage',params); // 取得所有專案列表（無分頁）

// CreateProject
export const S_addProject = (params) => axiosForm.post('/AddProject',params); // 新增專案資料