
Page({
  onLoad:function(){
    this.setData({preset:getApp().globalData.preset})
    this.refresh()
  },
  data: {
    ans:[],
  },
  t: function (e) {
   var id = e.currentTarget.dataset.id
   getApp().globalData.currentProject = getApp().globalData.projects[id]
   wx.navigateTo({url: '../detail/detail',})
  },
  addproject: function (e) {
     getApp().globalData.projects.push({n:'new 1',r:"rdd1234561"});
     this.refresh();
    },
    remove: function (e) {
      var id = e.currentTarget.dataset.id
      getApp().globalData.projects.splice(id,1)
      this.refresh();
     },
  refresh:function(s){
    this.setData({ ans: getApp().globalData.projects })
  }
})
