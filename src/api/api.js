// 默认接收参数
//第一个总是authorization（用户token验证），
// 第二个为path 路径 ，
//第三个为params接收的DATA
import axios from 'axios';
let base = 'http://192.168.2.250:8088';
//----------------------------------------------------登录
export const requestLogin = params => { //登录接口
return axios.post(`${base}/main/login`, params) //路径
    .then(res => res.data) //成功的在data里
};
//----------------------------------------------------获取
export const getList = (authorization, path, params) => {
  return axios({
    method: 'POST',
    url: `${base}/${path}`,
    headers: {
    'accessToken_cookie' : authorization
    },
    data: params
  })
}
//----------------------------------------------------删除
export const delList = (authorization, path, params) => {
  return axios({
    method: 'POST',
    url: `${base}/${path}`,
    headers: {
      'accessToken_cookie': authorization
    },
    data: params
  })
}
//----------------------------------------------------增加
export const addList = (authorization, path, params) => {
  return axios({
    method: 'POST',
    url: `${base}/${path}`,
    headers: {
      'accessToken_cookie': authorization
    },
    data: params
  })
}
//----------------------------------------------------修改
export const alterList = (authorization, path, params) => {
  return axios({
    method: 'POST',
    url: `${base}/${path}`,
    headers: {
      'accessToken_cookie': authorization
    },
    data: params
  })
}
