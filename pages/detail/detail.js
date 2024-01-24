// pages/detail/detail.js
Page({
  t: function (e) {
    //  console.log(e.currentTarget.dataset.id)
     var id = e.currentTarget.dataset.id
     var currentProject = getApp().globalData.currentProject
     getApp().globalData.currentWork = currentProject.works[id]
     wx.navigateTo({url: '../item/item',})
    },
  /**
   * 页面的初始数据
   */
  data: {
    title:"可回收",
    remark:"指的是...",
    list:['鸡蛋壳',"玉米棒"],
    icon:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var currentProject = getApp().globalData.currentProject
    this.setData({ name: currentProject.n})
    this.setData({ list: currentProject.works})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})