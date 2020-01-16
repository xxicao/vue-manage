import axios from 'axios'
import environment from '../environment'

/* options请求 */
export const http = axios.create({
  baseURL: environment.apiUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

/* 拦截器 */
http.interceptors.request.use(function (config) {
  /* 添加用户认证信息 */
  config.headers['X-Requested-With'] = 'tokenInfo=scret123'
  return config;
}, function (error) {
  return Promise.reject(error);
})
http.interceptors.response.use(function (res) {
  /* 统一错误处理 */
  switch (res.status) {
    case 200:
      if (res.data) {
        // 根据业务状态码定制
        return res.data
      }
      break;
    case 500:
      return new Error('服务器内部错误');
    default:
      console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', res);
      return new Error(res);
  }
  return res;
}, function (error) {
  return Promise.reject(error);
});

/* 无options请求 */
export const singleHttp = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    let req = ''
    for (let key in data) {
      req += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
    }
    return req.slice(0, -1)
  }],
  timeout: 10000
})
/* 拦截器 */
singleHttp.interceptors.request.use(function (config) {
  /* 添加用户认证信息 */
  config.headers['X-Requested-With'] = 'tokenInfo=scret123'
  return config;
}, function (error) {
  return Promise.reject(error);
})
singleHttp.interceptors.response.use(function (res) {
  /* 统一错误处理 */
  switch (res.status) {
    case 200:
      if (res.data) {
        return res.data
      }
      break;
    case 500:
      return new Error('服务器内部错误');
    default:
      console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', res);
      return new Error(res);
  }
  return res;
}, function (error) {
  return Promise.reject(error);
});
