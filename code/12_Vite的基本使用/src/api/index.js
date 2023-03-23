import axios from 'axios'

// ?创建一个axios实例
const instance = axios.create({
  baseURL: 'http://www.coderyliu.online:3000',
  timeout: 1000 * 30
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  return err
})

// 请求热门歌单分类
export function getSongHotMenu() {
  return instance.request({
    url: '/playlist/hot'
  })
}

// ?测试跨域
export function testCore() {
  return axios({
    url: '/users'
  })
}