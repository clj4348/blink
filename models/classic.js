import { HTTP } from '../util/http.js'
class ClassicModel extends HTTP {
  // 数据请求
  getLatest(callBack){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callBack && callBack(res)
        this._setLatestIndex(res.index)
      }
    })
  }
  // 期刊数据切换
  getPrevious(index,callBack) {
    this.request({
      url: 'classic/' + index + '/previous',
      success: (res) => {
        callBack && callBack(res)
      }
    })
  }

  // 是否为第一期刊
  isFirst(index){
    return index == 1 ? true : false 
  }
  // 是否为最新期刊
  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  // 数据缓存
  _setLatestIndex(index){
    wx.setStorageSync('latest', index);
  }
  //读取缓存
  _getLatestIndex(){
    let index = wx.getStorageSync('latest');
    return index
  }
}
export {
  ClassicModel
}

