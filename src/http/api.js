import axiosInstance from './index'; // 載入 json 格式的配置請求
import axiosForm from './form.index'; // 載入 formdata 格式的配置請求

// Common
export const S_login = (params) => axiosInstance.post('/Login',params); // 登入會員
export const S_signup = (params) => axiosInstance.post('/SignUp',params); // 註冊會員
export const S_uploadProfile = (params) => axiosForm.post('/UploadProfile',params); // 註冊會員 圖片上傳
export const S_getSkills = (params) => axiosForm.get('/GetSkills',params); // 取得技能列表
export const S_getProjectClass = (params) => axiosForm.get('/GetProjectClass',params); // 取得專案類別列表
export const S_addFavoriteProject = (params) => axiosForm.post(`/AddFavoriteProject?projectId=${params}`); // 收藏專案
export const S_cancelFavoriteProject = (params) => axiosForm.post(`/CancelFavoriteProject?projectId=${params}`); // 取消收藏專案
export const S_presentFavoriteProject = (params) => axiosForm.get(`/PresentFavoriteProject?projectId=${params}`); // 顯示是否收藏該專案

// User
export const S_getUserInfo = (params) => axiosInstance.get('/GetUserInfo',params); // 取得會員資料
export const S_editUserInfo = (params) => axiosInstance.put('/EditUserInfo',params); // 編輯會員資料
// export const S_editProfilePic = (params) => axiosForm.post('/EditProfilePic',params); // 編輯會員資料 圖片上傳
export const S_getAddProject = (params) => axiosInstance.get('/GetAddProject',params); // 取得發起的專案資料
export const S_getAddProjectNoPage = (params) => axiosInstance.get('/GetAddProjectNoPage',params); // 取得發起的專案資料（無分頁）
export const S_getApplyProject = (params) => axiosInstance.get('/GetApplyProject',params); // 取得申請的專案資料
export const S_getApplyProjectNoPage = (params) => axiosInstance.get('/GetApplyProjectNoPage',params); // 取得申請的專案資料（無分頁）
export const S_getAttendProject = (params) => axiosInstance.get('/GetAttendProject',params); // 取得參與的專案資料
export const S_getAttendProjectNoPage = (params) => axiosInstance.get('/GetAttendProjectNoPage',params); // 取得參與的專案資料（無分頁）
export const S_getSaveProject = (params) => axiosInstance.get('/GetSaveProject',params); // 取得收藏的專案資料
export const S_getSaveProjectNoPage = (params) => axiosInstance.get('/GetSaveProjectNoPage',params); // 取得收藏的專案資料

// CreateProject
export const S_addProject = (params) => axiosInstance.post('/AddProject',params); // 新增專案資料
export const S_uploadGroupPic = (params) => axiosForm.post('/UploadGroupPic',params); // 新增專案資料 圖片上傳
export const S_editProject = (paramsA, paramsB) => axiosInstance.put(`/EditProject?Id=${paramsA}`, paramsB); // 編輯專案詳細內容

// Match
export const S_getApplicant = (params) => axiosInstance.get(`/GetApplicant?id=${params}`); // 取得申請人列表
export const S_getApplicantInfo = (paramsA, paramsB) => axiosInstance.get(`/GetApplicantInfo?memberId=${paramsB}&projectId=${paramsA}`); // 取得申請人資料
export const S_passApplicant = (paramsA, paramsB) => axiosInstance.post(`/PassApplicant?memberId=${paramsB}&projectId=${paramsA}`); // 通過申請人
export const S_rejectApplicant = (paramsA, paramsB) => axiosInstance.post(`/RejectApplicant?memberId=${paramsB}&projectId=${paramsA}`); // 不通過申請人
export const S_attendProject = (params) => axiosInstance.post(`/AttendProject?Id=${params}`); // 參與專案

// ViewProject
export const S_getAllProject = (params) => axiosInstance.get('/GetAllProject',params); // 取得所有專案列表
export const S_getAllProjectNoPage = (params) => axiosInstance.get('/GetAllProjectNoPage',params); // 取得所有專案列表（無分頁）
export const S_getAllProjectGuest = (params) => axiosInstance.get('/GetAllProjectGuest',params); // 取得所有專案列表【無登入】
export const S_getAllProjectGuestNoPage = (params) => axiosInstance.get('/GetAllProjectGuestNoPage',params); // 取得所有專案列表【無登入】（無分頁）
export const S_getProjectDetail = (params) => axiosInstance.get(`/GetProjectDetail?Id=${params}`); // 取得專案詳細內容
export const S_getProjectMessage = (params) => axiosInstance.get(`/GetProjectMessage?projectId=${params}`); // 取得專案留言內容
export const S_checkUser = (params) => axiosForm.post(`/CheckUser?projectId=${params}`); // 驗證是否為發起人

// SuccessProject
export const S_getSuccessProject = (params) => axiosInstance.get('/GetSuccessProject',params); // 取得已完成專案列表
export const S_getSuccessProjectNoPage = (params) => axiosInstance.get('/GetSuccessProjectNoPage',params); // 取得已完成專案列表（無分頁）
export const S_getSuccessProjectGuest = (params) => axiosInstance.get('/GetSuccessProjectGuest',params); // 取得已完成專案列表【無登入】
export const S_getSuccessProjectGuestNoPage = (params) => axiosInstance.get('/GetSuccessProjectGuestNoPage',params); // 取得已完成專案列表【無登入】（無分頁）
export const S_getSuccessProjectDetail = (params) => axiosInstance.get(`/GetSuccessProjectDetail?projectId=${params}`); // 取得已完成專案詳細內容
