import axios from 'axios'

const service = axios.create({
    baseURL: 'http://rap2.taobao.org:38080/app/mock/264698/',
    timeout: 1000,
    withCredentials:true,
    headers: {'Content-type': 'application/json;charset:utf-8'}

});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token=localStorage.getItem("token")
    if (token) {
        config.headers.token=token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default service