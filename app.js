//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    preset:"p1",
    icons : [1,2, 3, 4],
    currentProject:{},
    currentWork:{},
    currentItem:{},
    projects:[
      {n:"project1",r:"r1",works:[
        {n:"work1",items:[
          {n:"item1",r:"r"},
          {n:"item2",r:"r"},
        ]}
      ]},
      {n:"project2",r:"r2",works:[{n:"work2",items:[{n:"item1",r:"r211"}]}]},
    ],
  }
})