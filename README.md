# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
创建一个js文件，如下：
```// 默认接收参数
//第一个总是authorization（用户token验证），
// 第二个为path 路径 ，
//第三个为params接收的DATA
import axios from 'axios';
let base = 'http://**********';
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
```
在调用的页面调用相对应的封装完的axios名称，然后直接调用
```
import {requestLogin,getList} from '../api/api'
```
```
 var loginParams = {//需要穿的参数
    loginName: ***,
    loginPassword:***
  };
  requestLogin(loginParams).then(data => { //调用封装的axios
    if (data.resultCode == 10000) {//成功状态码
      this.$message({//弹出成功消息框
        showClose: true,
        message: 'ok',
        type: 'success'
      });
    }
  })
```
```
  var headers=****;//取token
  var path='/***/***'//路径
  var postData = {//需要传的参数
    pageInfo: {
      pageNo: 1,
      pageSize: 10
    }
  }
  getList(headers,path,postData).then(data => { //调用封装的axios
  console.log(data)//打印出来

  })
```
