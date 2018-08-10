import { HTTP } from '../util/http.js'
class ClassicModel extends HTTP {
  getLatest(callBack){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callBack && callBack(res)
      }
    })
  }
}
export {
  ClassicModel
}

