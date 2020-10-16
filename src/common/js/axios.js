import Axios from 'axios'
import querystring from 'querystring'
let service = Axios.create({
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use(function (config) {
  config.method === 'post'
    ? config.data = querystring.stringify(config.data)
    : config.params = {...config.params}
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, function (error) {
  console.log('request error', error)
  return error
})
// 响应拦截器
service.interceptors.response.use(function (res) {
  if ((res.data && res.data.status && res.data.status == 200) || res.status == 200) {
    // 后台正常返回数据
  } else {
    // 后台没有返回正常数据
    res.errCode = 3
    res.message = '数据异常(后台异常)'
  }
  return res
}, function (error) {
  if (error.code == 'ECONNABORTED') {
    error.errCode = 4
    error.message = '请求超时'
  } else if (!error.response) {
    error.errCode = 1
    error.message = '无网络'
  } else {
    error.errCode = 2
    error.message = '系统异常(前端请求异常)'
  }
  return error
})

export default {
  get (url, params) {
    return new Promise(function (resolve, reject) {
      service({
        method: 'get',
        url,
        params
      }).then(function (res) {
        resolve(res)
      }).catch(function (error) {
        reject(error)
      })
    })
  },
  post (url, data) {
    return new Promise(function (resolve, reject) {
      service({
        method: 'post',
        url,
        data
      }).then(function (res) {
        // console.log('axios请求成功：res=', res)
        if (res.errCode) {
          // 1-无网络、2-系统异常(前端请求异常)、3-数据异常(后台异常)
          reject(res)
        } else {
          // 正常请求
          resolve(res.data)
        }
      }).catch(function (error) {
        console.log('axios请求异常：error=', error)
        error.errCode = 2
        error.message = '系统异常(前端请求异常)'
        reject(error)
      })
    })
  }
}
