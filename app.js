//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'projects',
      success (res) {
        getApp().globalData.projects = res.data || getApp().globalData.initprojects
      }
    })
  },
  addproject:function(p){
    if(!this.globalData.projects)
      this.globalData.projects = this.globalData.initprojects
    this.globalData.projects.push(p);
    wx.setStorage({
      key: 'projects',
      data: getApp().globalData.projects,
      })
  },
  reset:function(p){
    this.globalData.projects = this.globalData.initprojects
    wx.setStorage({
      key: 'projects',
      data: getApp().globalData.projects,
      })
  },
  globalData: {
    preset:"p1",
    icons : [1,2, 3, 4],
    currentProject:{},
    currentWork:{},
    currentItem:{},
    initprojects:[
      {n:"玩转zigbuild",r:"r1",works:[
        {n:"renato的c构建翻译",items:[
          {n:"[]是数组，[*]是什么？",r:"r"},
          {n:"include c不需要任何声明，怎么做到的？",r:"r"},
        ]},
        {n:"cmake",items:[
          {n:"cmake和make的关系？",r:"r"},
          {n:"cmake为了解决什么问题而被创建？",r:"r"},
        ]},
        {n:"make",items:[
          {n:"m4是什么？",r:"r"},
          {n:"make的源代码如何编译？",r:"r"},
        ]}
      ]},
      {n:"project2",r:"r2",works:[{n:"work2",items:[{n:"item1",r:"r211"}]}]},
    ],
  }
})