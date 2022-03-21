export const setInterceptors = (axiosInstance) => {
    // 請求攔截
    axiosInstance.interceptors.request.use(request => {
        return request;
    }, error => Promise.reject(error));

    // 回應攔截
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error.response);
    })
};