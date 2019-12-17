import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout = 60000

export const testApi = () => {
  return axios.post('/')
}
