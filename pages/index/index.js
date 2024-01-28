
Page({
  onLoad:function(){
    this.setData({preset:getApp().globalData.preset})
    this.refresh()
  },
  data: {
    ans:[],
    inputValue:"project descri",
  },
  inputChange: function (e) {
    // console.log(e)
    this.setData({ inputValue: e.detail.value })
   },
  t: function (e) {
   var id = e.currentTarget.dataset.id
   getApp().globalData.currentProject = getApp().globalData.projects[id]
   wx.navigateTo({url: '../detail/detail',})
  },
  addproject: function (e) {
    getApp().addproject({n:this.data.inputValue,r:"rdd1234561"})
    
     this.refresh();
    },
    reset: function (e) {
      getApp().reset();
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
