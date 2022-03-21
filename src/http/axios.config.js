export default {
    // baseURL: '/api', // 伺服器地址或配置的代理路徑
    baseURL: import.meta.env.MODE === 'development' ? import.meta.env.VITE_DEV_API : import.meta.env.VITE_PROD_API,
    timeout: 10000,  // 超過時間(10s)
    headers: {} // 配置請求
}
