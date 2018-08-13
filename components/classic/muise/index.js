// components/classic/muise/index.js
import { classicBeh } from '../classic-beh.js'
// 背景音乐管理对象
const mMgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
		src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
		playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },
	
	attached: function(event){
		this._recoverStatus()
		this._monitorSwitch()
	},
  /**
   * 组件的方法列表
   */
  methods: {
		onPlay: function(){
			// 切换图片
			if(!this.data.playing){
				this.setData({
					playing: true,
				})
				mMgr.src = this.properties.src
			}else {
				this.setData({
					playing: false,
				})
				mMgr.pause()
			}
		},
		_recoverStatus: function(){
			// 当前没有任何音乐播放状态
			if(mMgr.paused){
				this.setData({
					playing: false
				})
				return
			}
			// 判断当前音乐是否播放
			if(mMgr.src == this.properties.src){
				this.setData({
					playing: true
				})
			}
		},
		// 总控开关
		_monitorSwitch: function(){
			mMgr.onPlay(() => {
				this._recoverStatus()
			})
			mMgr.onPause(() => {
				this._recoverStatus()
			})
			mMgr.onStop(() => {
				this._recoverStatus()
			})
			mMgr.onEnded(() => {
				this._recoverStatus()
			})
		}
  }
})
