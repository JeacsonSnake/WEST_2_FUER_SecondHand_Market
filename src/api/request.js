//axios 二次封装
import axios from "axios";

const requests = axios.create({
    //基础路径
    baseURL: "/",
    //请求超时时间： 5s
    timeout: 5000,
    // headers: headers
})
//请求拦截器

requests.interceptors.request.use((config) => {
    //cconfig: 配置对象

    return config;
})

//相应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    alert(err);
    return Promise.reject(new Error('Server failed!'));
})

//对外暴露
export default requests