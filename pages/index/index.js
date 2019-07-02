Page({
  data: {
    count:0,
  },
  inc: function (e) {
    this.setData({ count: this.data.count+1})
  },
  dec: function (e) {
    this.setData({count:this.data.count-1})
  }
})
