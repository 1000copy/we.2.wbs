

(上海市生活垃圾分类投放指引)[http://lhsr.sh.gov.cn/sites/ShanghaiGreen/dyn/xxgk_content.ashx?ctgId=d9c3641a-2fcd-4610-be8f-dc2bf5d0f8c6&infId=ebd82bda-2525-4f4e-9f75-4fd5878ea4ec&leftBarId=d7c2aa81-db54-4754-ab81-c85fb2b683a1]


5c96997f5c6150c61e157a7d2b4422b7 wx60d2bb1f9f2abb5d

# we.1


mini app demo 


一个span，两个按钮，点击按钮会让span加1或者减1。它简单到你不需要分心关注，但是由足够说明典型的html场景——就是既有数据呈现也有按钮操作。

UI看起来是这样的：

<div id="app">
    <button id="inc">+</button>
    <span id="count">0</span>
    <button id="dec">-</button>  
</div>
	

最低需要的5个文件的内容

	app.json
	index/index.wxml
	index/index.wxss
	index/index.js
	index/index.json

## app.json

	{
	  "pages": [
	    "pages/index/index"
	  ]
	}

##  index/index.wxml

	<view class="container">
	    <button bindtap="inc">+</button>
	    <text>{{count}}</text>
	    <button bindtap="dec">-</button>
	</view>


## index/index.wxss

	.container{
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	}

## index/index.js

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

##  index/index.json

	{
	  "usingComponents": {}
	}




## 跨页面的数据分享

定义于 app.js 内的数据

    App({
      globalData: {
        userInfo: null
      }
    })


使用数据页面

    const app = getApp()
    app.globalData.userInfo // 可读可写

## 数据存储的利用

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

## 传递页面参数
	
	wx.navigateTo({
      url: '../detail/detail?type=3',
    })

## 接受页面参数

    Page({
	  onLoad: function (options) {
		    this.setData({ type: +options.type-1})
	  },
	})

