Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type:Number,
      observer: function(newVal, oldVal, changedPath){ 
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        }) 
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months:[
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ], 
    month: '7月',
    year: '2018',
    _index: ''
  },
  // 组件生命周期函数，在组件实例进入页面节点树时执行
  attached: function() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    this.setData({
      month: this.data.months[month],
      year
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
