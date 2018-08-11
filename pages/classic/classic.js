import {ClassicModel} from '../../models/classic.js';
import {LikeModel} from '../../models/like.js';

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:{},
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 数据更新, storage
    classicModel.getLatest((res) =>{
      this.setData({
        classic: res
      })
    })
  },
  onLike: function (event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  onPrevious: function (event) {
    let index = this.data.classic.index
    classicModel.getPrevious(index, (res) => {
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },
  onNext: function () {

  },
  methods: {
    
  }
})