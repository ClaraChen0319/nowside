export default {
    baseURL: import.meta.env.MODE === 'development' ? import.meta.env.VITE_DEV_API : import.meta.env.VITE_PROD_API,
    timeout: 10000,  // 超過時間(10s)
    headers: { 'Content-Type': 'multipart/form-data' } // formdata 格式的請求格式
}
