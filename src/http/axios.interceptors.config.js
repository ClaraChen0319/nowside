export const setInterceptors = (axiosInstance) => {
    // 請求攔截
    axiosInstance.interceptors.request.use(request => {
        const token = localStorage.getItem('signupToken'); // 使用 getItem 將 localStorage 的 token 取出
        if (token) {
            request.headers.Authorization = `Bearer ${token}` // 若有對應的 token 則將其塞入 headers
        };
        return request; // 若無則 return
    }, error => Promise.reject(error));

    // 回應攔截
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error.response);
    })
};