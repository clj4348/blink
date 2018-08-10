import {HTTP} from '../util/http.js'
class LikeModel extends HTTP{
  // behavior状态, artID: id 
  like(behavior, artID, category){
    // url根据状态来决定的
    let url = behavior == 'like' ? 'like' : 'like/cancel';
    
    this.request({
      url: url,
      method: 'POST',
      data:{
        art_id: artID,
        type: category
      }
    })
  }
}
export {
  LikeModel
}