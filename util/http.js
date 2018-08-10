import { config } from '../config.js'
// 错误提示
const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在' 
}

class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method || 'GET',
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey': config.appkey
      },
      // 成功回调
      success:(res) => {
        // startsWith 字符串以什么开头
        // endsWith 字符串以什么结尾
        // 状态码
        let code = res.statusCode.toString()
        // 服务成功回调的处理
        if (code.startsWith('2')){
          params.success && params.success(res.data)
        } else {
          // 请求错误处理
          let error_code = res.data.error_code
          this.showError(error_code)
        }
      },
      // 错误处理
      fail:(err) => {
        this.showError(1)
      }
    })
  }
  showError(errorCode){
    !errorCode && (error_code = 1) 
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration: 2000 // 延迟时间
    })
  }
}
export {
  HTTP
}