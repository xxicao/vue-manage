import test from './test'
import test2 from './test2'
import prod from './product'

let baseConfig = {
  appName: 'VueManage',
  production: false,
  successCode: 100200,
  apiUrl: 'https://manager.goshare2.com',
  imgUrl: 'https://img.goshare2.com/'
}
let extendConfig;
const environment = process.env.NODE_ENV;
switch (environment) {
  case 'test':
    extendConfig = test;
    break;
  case 'test2':
    extendConfig = test2;
    break
  case 'prod':
    extendConfig = prod;
    break
}

export default {
  ...baseConfig,
  ...extendConfig
}
