let garbage = getApp().globalData.garbage
function search(garbage,s){
  let ans = []
  if (!s) return []
  let gs = garbage.split(" ")
  for (let i = 0; i < gs.length; i++) {
    if (gs[i].indexOf(s) > -1) {
      ans.push(gs[i])
    }
  }
  return ans
}
function toStr(anses){
  var s = ''
  for(var i = 0;i<anses.length;i++)
    if (anses[i].length == 0)continue 
    else
    s +=  i + anses[i].join(',')
  return s
}
function normal(anses) {
  var a = []
  var types = getApp().globalData.typestr.split(' ')
  for (var i = 0; i < anses.length; i++)
    if (anses[i].length == 0) continue
    else{
      for (var j = 0; j < anses[i].length; j++){
        var tn = {type:"",name:""}
        tn.type = types[i]
        tn.name = anses[i][j]
        if(a.length < 4)
          a.push(tn)
        else{
          a.push({name:"...",type:"..."})
          return a
        }
      }
    }
  return a
}
Page({
  onLoad:function(){
    this.setData({preset:getApp().globalData.userInfo})
    this.dos(this.data.preset)
  },
  data: {
    icons:getApp().globalData.icons,
    count:0,
    preset:"globale",
    ans:[{name:"纸张",type:"干垃圾"}]
  },
  t1: function (e) {
    wx.navigateTo({
      url: '../detail/detail?type=1',
    })
  },
  t2: function (e) { 
    wx.navigateTo({
      url: '../detail/detail?type=2',
    })
  },
  t3: function (e) { 
    wx.navigateTo({
      url: '../detail/detail?type=3',
    })
  },
  t4: function (e) {
    wx.navigateTo({
      url: '../detail/detail?type=4',
    })
   },
  dosearch:function(e){
    var s = e.detail.value
    this.dos(s)
  },
  dos:function(s){
    let anses = []
    for (var i = 0; i < 4; i++) {
      let ans = search(garbage[i], s)
      anses.push(ans)
    }
    // this.setData({ value: ans.join(',') })
    this.setData({ ans: normal(anses) })
  }
})
