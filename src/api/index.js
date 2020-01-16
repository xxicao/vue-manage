import axios from 'axios'
import environment from '../environment'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

/* options请求 */
export const http = axios.create({
  // 相对请求域名
  baseURL: environment.apiUrl,
  // 超时时间
  timeout: 10000,
  // 请求数据类型
  headers: { 'Content-Type': 'application/json' },
  // 服务器响应的数据类型 'arraybuffer', 'blob', 'document', 'json', 'text',
  responseType: 'json',
  cancelToken: source.token
})

/* 请求拦截器 */
http.interceptors.request.use(function (config) {
  /* 添加用户认证信息 */
  config.headers['X-Requested-With'] = 'tokenInfo=scret123'
  return config;
}, function (error) {
  console.error('请求错误');
  return Promise.reject(error);
})

/* 响应拦截器 */
http.interceptors.response.use(function (res) {
  /* 统一错误处理 */
  switch (res.status) {
    case 200:
      if (res.data) {
        // 根据业务状态码定制
        return Promise.resolve(res.data)
      }
      break;
    case 500:
      console.error('服务器内部错误', res.data);
      return Promise.reject(res.data);
    default:
      console.error('未可知错误，大部分是由于后端不支持CORS或无效配置引起', res);
      return Promise.reject(res);
  }
  return res;
}, function (error) {
  console.error('响应错误');
  return Promise.reject(error);
});

// 取消请求 source.cancel()
export { source }
